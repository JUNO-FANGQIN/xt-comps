const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TSImportPluginFactory = require('ts-import-plugin')

module.exports = {
    mode: 'development',
    entry: './demo/index.jsx',
    output: {
        path: path.join(__dirname, 'dev'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dev'),
        port: 9000,
        compress: true,
        historyApiFallback: true,
        allowedHosts: ['dev.xtransfer.cn']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: /demo|src/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
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
                include: /demo|src/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', '@babel/preset-env']
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
                include: /node_modules/,
                use: ['style-loader', 'css-loader', {
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
                test: /\.less$/,
                include: /src/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(css)$/,
                include: /demo|src/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            },
            {
                test: /\.(css)$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'demo/index.html') }),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: path.join(__dirname, 'package.json'),
                    to: path.join(__dirname, 'dist/package.json')
                }
            ]
        })
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src')
        ],
        mainFiles: ['index', 'index.d'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.d.ts', '.css', '.less'],
    }
}
