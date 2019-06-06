// Vue-Loader配置
// const docsLoader = require.resolve('./doc-loader')  // vue-loader还有一个很强大的功能，自定义vue文件的模块
// 对文件指定loader、preloader、postloader

module.exports = (isDev) => {
    return {
        preserveWhitespace: true, //防止.vue文件中template中的不必要的空格对打包和样式等产生影响
        extractCSS: !isDev, //vue文件中的css默认是单独打包的，不会打包到在webpack设置中单独打包的css文件中
        cssModules: {
            loacalIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',  //在公司和别人合作时要事先定义好
            camelCase: true
        },
        //postcss: 有全局的postcss配置了，这里不用写了
        //hotReload: false //热重载,根据环境变量生成。样式的热重载是根据vue-loader
        // loaders: {
        //     'docs': docsLoader
        // }
        // preloader: {},
        // postloader: {}
    }
}
