// next.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
/* eslint-enable @typescript-eslint/no-var-requires */

const isProd = process.env.NODE_ENV === 'production';
const prodAssetPrefix = '/connectN';

module.exports = withTypescript({
  webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

    return config;
  },
  assetPrefix: isProd ? prodAssetPrefix : '',
  publicRuntimeConfig: {
    linkPrefix: isProd ? prodAssetPrefix : '',
  },
});
