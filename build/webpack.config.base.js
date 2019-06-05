// 这个文件写开发环境和生产环境下共有的配置
const path = require('path')                            //path是Nodejs中的基本包,用来处理路径
const cteateVueLoaderOptions = require('./vue-loader.config')
// const HTMLPlugin = require('html-webpack-plugin')       //引入html-webpack-plugin
// const webpack = require("webpack")                      //引入webpack

const isDev = process.env.NODE_ENV === "development"    //判断是否为测试环境,在启动脚本时设置的环境变量都是存在于process.env这个对象里面的

const config = {
    target: "web",                                      //设置webpack的编译目标是web平台
    entry: path.join(__dirname,'../client/index.js'),         //声明js文件入口,__dirname就是我们文件的根目录,用join拼接
    output:{                                            //声明出口文件
        filename: 'bundle.js',                          //将挂载的App全部打包成一个bundle.js,在浏览器中可以直接运行的代码
        path: path.join(__dirname,'../dist')               //bundle.js保存的位置
    },
    module:{                                            //因为webpack只能处理js文件,且只识别ES5的语法
        rules:[                                         //所以针对不同类型的文件,我们定义不同的识别规则,最终目的都是打包成js文件
            {
                test: /\.vue$/,
                loader: 'vue-loader',                  //处理.vue文件
                options: cteateVueLoaderOptions(isDev)
            },
            {
                test: /\.js$/,           //新增
                loader: 'babel-loader',  //处理jsx文件
                exclude: /node-modules/  //编译时忽略node-modules中的文件，因为这个文件里的内容是已经经过编译的
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'                  //处理jsx文件
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',                     //将css的样式写入到html里面去
            //         'css-loader'                        //处理css文件
            //     ]
            // },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,      //处理图片
                use: [
                    {                                   //loader是可以配置选项的,如下options
                        loader: 'url-loader',           //url-loader实际上依赖于file-loader,file-loader处理完文件可以保存为一个文件供处理
                        options: {
                            limit: 1024,                //url-loader的好处是可以加一个限制的大小,对于小图片,在范围内可直接将图片转换成base64码直接存放在js中,以减少http请求.
                            name: 'resources/[path][name].[hash:8].[ext]'        //输出文件的名字,[name] 文件原名,[ext]文件扩展名.
                        }
                    }
                ]
            }
        ]
    },
    //不是所有环境都这么定义，所以并非公共的东西
    // plugins:[
    //     new webpack.DefinePlugin({                      //主要作用是在此处可以根据isdev配置process.env,一是可以在js代码中可以获取到process.env,
    //         'process.env':{                             //二是webpack或则vue等根据process.env如果是development,会给一些特殊的错误提醒等,而这些特殊项在正式环境是不需要的
    //             NODE_ENV: isDev ? '"development"' : '"production"'
    //         }
    //     }),
    //     new HTMLPlugin()                                //引入HTMLPlugin
    // ]
}



module.exports = config                                 //声明一个config的配置,用于对外暴露