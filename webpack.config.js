const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
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
    }),

    new PreloadWebpackPlugin()
  ];

  if(isProd) {
    plugins.push(
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
      ],
    });
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    );

    cssLoader = [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          module: true,
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
      {
        loader: 'postcss-loader'
      }
    ];
  }

  if (serviceWorkerBuild) {
    plugins.push(
      // copy WorkboxSW production build file
      new CopyWebpackPlugin([
        { from: require.resolve('workbox-sw'), to: 'workbox-sw.prod.js' }
      ]),

      new WorkboxWebpackPlugin({
        globDirectory: BUILD_DIR,
        globPatterns: ['**/*.{html,js,css}'],
        swSrc: path.join(ROOT_DIR, 'service-worker.js'),
        swDest: path.join(BUILD_DIR, 'sw.js'),
      })
    );
  }

  const entryPoint = `${SRC_DIR}/index.js`;

  return {
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    context: SRC_DIR,
    entry: {
      main: entryPoint
    },
    output: {
      path: BUILD_DIR,
      publicPath: '/',
      filename: '[name]-[hash:8].js',
      chunkFilename: '[name]-[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.(html|svg|jpe?g|png|ttf|woff2?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'static/[name]-[hash:8].[ext]',
            },
          },
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: cssLoader,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, 'node_modules'), SRC_DIR],
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
      historyApiFallback: true,
      port: PORT,
      host: HOST,
      hot: !isProd,
      compress: isProd,
      stats: stats,
    }
  };
};
