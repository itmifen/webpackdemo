const path=require('path');
const htmlwebpackPlugin=require('html-webpack-plugin');
const cleanwebpackPlugin=require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports={
    entry:'./src/index.js',
    devtool:'source-map',
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    plugins:[
        new cleanwebpackPlugin(['dist']),
        new htmlwebpackPlugin({
            template:"./src/index.html",
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename:'bundle.js',
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