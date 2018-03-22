const path=require('path');
const htmlwebpackPlugin=require('html-webpack-plugin');
const cleanwebpackPlugin=require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports={
    entry:{
       index:'./src/index.js',
       list:'./src/list/list.js'
    },
    devtool:'source-map',
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    plugins:[
        new cleanwebpackPlugin(['dist']),
        new htmlwebpackPlugin(
            {
                template:"./src/index-dev.html",
                chunks:['index']//加载指定模块中的文件，否则页面会加载所欲文件
            }
         ),
         new htmlwebpackPlugin(
            {
                filename:'./list/list.html',
                template:"./src/list/list.html",
                chunks:['list']//加载指定模块中的文件，否则页面会加载所欲文件
            }
         ),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?jQuery!expose-loader?$!expose-loader?scrollable'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {    
                test: /\.js$/,    
                exclude: /node_modules/,    
                loader: 'babel-loader'    
            }
        ]
    }
}