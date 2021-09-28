const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TSImportPluginFactory = require('ts-import-plugin')
const glob = require('glob')
const webpackIconfontPluginNodejs = require('webpack-iconfont-plugin-nodejs')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


function utils () {
    const entrys = { main: './src/index.ts' }
    const externals = {}
    const files = glob.sync('./src/**/index.*(jsx|tsx)')
    files.forEach(file => {
        const execed = /^\.\/src\/[a-zA-Z0-9_]+\/([a-zA-Z0-9_]+)\/index\.(jsx|tsx)$/.exec(file)
        if (execed && execed[1]) {
            entrys[execed[1]] = file
            externals[execed[1]] = `xtcomps/lib/${execed[1]}`
        }
    })
    return { entrys, externals }
}

const { entrys, externals } = utils()

module.exports = {
    entry: entrys,
    output: {
        path: path.join(__dirname, 'dist/lib'),
        filename: (context) => context.chunk.name === 'main' ? 'index.js' : `${context.chunk.name}/index.js`,
        library: {
            type: 'umd'
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: /src/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                    plugins: [
                        ['import', {
                          libraryName: 'antd',
                          libraryDirectory: 'lib',
                          style: true
                        }]
                    ]
                }
            },
            {
                test: /\.tsx?$/,
                include: /src/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react']
                        }
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                          getCustomTransformers: () =>({
                            before: [TSImportPluginFactory([{
                              libraryName: 'antd',
                              libraryDirectory: 'lib',
                              style: true
                            }])]
                          })
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                include: /src/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.less$/,
                include: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                  loader: 'less-loader',
                  options: {
                    lessOptions: {
                      modifyVars: {
                        'primary-color': '#ff934a',
                        'font-size-base': '14px'
                      },
                      javascriptEnabled: true
                    }
                  }
                }]
            },
            {
                test: /\.(css)$/,
                include: /src/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[local]_[hash:base64:4]'
                        }
                    }
                }]
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg|ttf|eot|otf|svg|woff|woff2)$/,
                include: /src/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: path.join(__dirname, 'src/constants'),
                    to: path.join(__dirname, 'dist/constants')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: (context) => `${context.chunk.name}/style.css`
        }),
        new webpackIconfontPluginNodejs({
            fontName: 'xt-icons',
            cssPrefix: 'icon',
            svgs: path.join(__dirname, 'src/resource/svgs/*.svg'),
            fontsOutput: path.join(__dirname, 'src/resource/fonts/'),
            cssOutput: path.join(__dirname, 'src/resource/fonts/font.less'),
            htmlOutput: path.join(__dirname, 'src/resource/fonts/font.html'),
            jsOutput: path.join(__dirname, 'src/resource/fonts/font.js'),
        }),
        new BundleAnalyzerPlugin(
            {
              analyzerMode: 'server',
              analyzerHost: '127.0.0.1',
              analyzerPort: 8889,
              reportFilename: 'report.html',
              defaultSizes: 'parsed',
              openAnalyzer: true,
              generateStatsFile: false,
              statsFilename: 'stats.json',
              statsOptions: null,
              logLevel: 'info'
            }
        )
    ],
    externals: [
        {
            react: 'react',
            'react-dom': 'ReactDom',
            ...externals
        },
        /antd\/.*/
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src')
        ],
        mainFiles: ['index', 'index.d'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.d.ts'],
    }
}
