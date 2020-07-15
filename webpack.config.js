const path=require('path')
module.exports = {
	// 打包main.js，打包后的文件输出到dist目录中，起名为build.js
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist/'),
		filename: 'build.js'
	},
	// 配置不同类型文件模块的加载
	module: {
		rules: [
			// 配置css文件模块，让css-loader那css文件打包到js中，再用style-loader让样式生效
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'	
				]
			},
			// 配置解析es6为es5
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							// 配置要解析的语法规范
                			presets: ['es2015'],
                			// babel-loader的依赖，不引入部分es6代码可能会解析错误
                			plugins: ['transform-runtime']
						}
					}
				],
				// 排除掉这里的js模块，不然webpack解析他们，提高打包速度
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
				options: {
				  name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.(woff|svg|eot|ttf)$/,
				loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]',
				
			}
		]
	}
};
