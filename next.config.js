const withCSS = require('@zeit/next-css')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = withCSS({
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(less)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.less$/,
        loader: 
        	ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: "css-loader!less-loader"
            })
      }
    )

    config.plugins.push(
        new ExtractTextPlugin(__dirname + '/static/styles.css')
    )

    return config
  }
})