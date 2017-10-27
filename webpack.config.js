const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 9000;
const ROOT_DIR = path.join(__dirname);
const SRC_DIR = path.join(__dirname, './src');
const BUILD_DIR = path.join(__dirname, './build');

const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: '\u001b[32m',
  },
};

module.exports = env => {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const serviceWorkerBuild = env && env.sw;
  let cssLoader;
  const htmlTemplate = `${SRC_DIR}/index.ejs`;

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      async: true,
      children: true,
      minChunks: 2,
    }),

    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),

    new ExtractTextPlugin('style-[contenthash:8].css'),

    new HtmlWebpackPlugin({
      template: htmlTemplate,
      inject: true,
      preload: ['*.css'],
      production: isProd,
      minify: isProd && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
      preload: {
        test: /^0|^main|^style-.*$/,
        chunks: 'all',
      }
    })
  ];

  if(isProd) {
    plugins.push(
      // create css bundle
      new ExtractTextPlugin('style-[contenthash:8].css'),

      new UglifyJSPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
      })
    );

    cssLoader = ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            module: true, // css-loader 0.14.5 compatible
            modules: true,
            localIdentName: '[hash:base64:5]',
          },
        },
        {
          loader: 'sass-loader',
          options: {
            outputStyle: 'collapsed',
            sourceMap: true,
            includePaths: [SRC_DIR],
          },
        },
        // {
        //   loader: 'postcss-loader'
        // }
      ],
    });
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    );

    cssLoader = [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          module: true,
          modules: true,
          localIdentName: '[path][name]-[local]',
        },
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: false,
          includePaths: [SRC_DIR],
        },
      },
      // {
      //   loader: 'postcss-loader'
      // }
    ];
  }

  if (serviceWorkerBuild) {
    plugins.push(
      new CopyWebpackPlugin([
        { from: require.resolve('workbox-sw'), to: 'workbox-sw.prod.js' },
        { from: path.resolve(ROOT_DIR, 'manifest.json'), to: 'manifest.json'},
        { from: 'images', to: 'static'}
      ]),

      new WorkboxWebpackPlugin({
        globDirectory: BUILD_DIR,
        globPatterns: ['**/*.{html,js,css}'],
        globIgnores: ['**/service-worker.js'],
        swSrc: path.join(ROOT_DIR, 'service-worker.js'),
        swDest: path.join(BUILD_DIR, 'sw.js'),
      })
    );
  }

  const entryPoint = `${SRC_DIR}/index.js`;

  return {
    devtool: isProd ? 'cheap-source-map' : 'eval-cheap-module-source-map',
    context: SRC_DIR,
    entry: {
      main: entryPoint
    },
    output: {
      path: BUILD_DIR,
      publicPath: '/',
      filename: isProd ? '[name]-[hash:8].js' : '[name].js',
      chunkFilename: isProd ? '[name]-[chunkhash:8].js' : '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.(html|svg|jpe?g|png|ttf|woff2?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            options: {
              name: isProd ? 'static/[name]-[hash:8].[ext]' : 'static/[name].[ext]',
            },
          },
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
          })
        },
        {
          test: /\.scss$/,
          include: SRC_DIR,
          use: cssLoader,
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: 'url-loader?limit=100000'
        },
        {
          test: /\.(js|jsx)$/,
          include: SRC_DIR,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, 'node_modules'), SRC_DIR],
      symlinks: false,
    },

    plugins,

    performance: isProd && {
      maxAssetSize: 300000,
      maxEntrypointSize: 300000,
      hints: 'warning',
    },

    stats: stats,

    devServer: {
      contentBase: BUILD_DIR,
      publicPath: '/',
      historyApiFallback: true,
      port: PORT,
      host: HOST,
      hot: !isProd,
      compress: isProd,
      stats: stats,
    }
  };
};
