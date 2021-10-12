### publish xtcomps
1. git stash --- 可选if(Git working directory not clean)
2. npm version patch / minor / major
1. yarn build
5. npm publish dist

### development build xtcomps
yarn build

### production start storybook
1. yarn build-storybook
2. copy storybook-static to static server

### development start storybook
1. yarn storybook
2. 访问 http://localhost:6006


### 样式常量
1. css文件：
```
    @import url('xtcomps/constants/style.css');
    var(--main-font-color)
```

2. less文件：
```
    @import "xtcomps/constants/style.less";
    @main-font-color
```
