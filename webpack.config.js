module.exports = {
  entry : './src/main.js',
  output : {
    path : __dirname+'/dist',
    publicPath : '/dist/',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      { test: /\.vue$/, exclude : /node_modules/, loader : 'vue-loader' },
      { test: /\.js$/, exclude : /node_modules/, loader : 'babel-loader' },
      { test: /\.css$/, exclude : /node_modules/, loader : 'style-loader!css-loader' },
      { test: /\.(scss|sass)$/, exclude : /node_modules/, loader : 'style-loader!css-loader!sass-loader' },
      { test: /\.(jpg|png|gif)$/, exclude : /node_modules/, loader : 'url-loader?limit=8192&name=images/[name].[ext]' },
    ]
  },
  devServer: {
    disableHostCheck: true
  }
}