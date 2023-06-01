const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const mode = process.env.NODE_ENV || 'development'

const devMode = mode === 'development'
const target = devMode ? 'web' : 'browserslist'
const devtool = devMode ? 'source-map' : undefined

module.exports = {
  mode,
  target,
  devtool,
  entry: ["./src/index.js","./src/modules/app.js", './src/modules/view/header/header.js', './src/modules/view/main/main.js', './src/modules/view/footer/footer.js'],
  output: { // output point
    path: path.join(__dirname, 'dist'),
    clean: true,
    filename: 'index.[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]' // directory for all assets
  },
  plugins: [
    new HtmlWebpackPlugin({ // convert html to new html
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({ // create & minify css
      filename: '[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      { // load html...
        test: /\.html$/i,
        loader: 'html-loader'
      },
      { // scss styles
        test: /\.(scss|css|sass)$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader']
      },
      { // babel compile for adalt browsers
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }]
            ]
          }
        }
      },
      { // fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      { // for images
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        use: [ // not svg
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ],
        type: 'asset/resource'
      }
    ]
  },
  devServer: { // server online
    watchFiles: path.join(__dirname, 'src'),
    hot: true,
    open: true,
    port: 9000
  }
}
