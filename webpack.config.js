const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PROD = JSON.parse(process.env.PROD || false);

module.exports = {
  entry: {
    app: [
      './public/index.js'
    ]
  },

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test:    /\.html$/,
        exclude: /node_modules/,
        loader:  'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(ttf|eot|svg|png|)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },

  devServer: {
    inline: true,
    stats: { colors: true },
  },

  plugins: PROD ? [
    new UglifyJSPlugin()
  ] : []
};
