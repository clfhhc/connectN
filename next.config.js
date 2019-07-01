// next.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
const withOffline = require('next-offline');
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
/* eslint-enable @typescript-eslint/no-var-requires */

const isProd = process.env.NODE_ENV === 'production';
const prodAssetPrefix = '/connectN';

module.exports = withOffline(
  withTypescript({
    webpack(config, options) {
      // Do not run type checking twice:
      if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

      return config;
    },

    // service-worker settings
    registerSwPrefix: `${prodAssetPrefix}/`,
    scope: `${prodAssetPrefix}/`,
    workboxOpts: {
      swDest: 'service-worker.js',
      globPatterns: ['app/static/**/*'],
      globDirectory: '.',
      modifyURLPrefix: {
        app: isProd ? prodAssetPrefix : '',
      },
      runtimeCaching: [
        // {
        //   urlPattern: /^https?.*/,
        //   handler: 'NetworkFirst',
        //   options: {
        //     cacheName: 'https-calls',
        //     networkTimeoutSeconds: 15,
        //     expiration: {
        //       maxEntries: 150,
        //       maxAgeSeconds: 30 * 24 * 60 * 60,
        //     },
        //     cacheableResponse: {
        //       statuses: [0, 200],
        //     },
        //   },
        // },
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 200,
            },
          },
        },
      ],
    },

    assetPrefix: isProd ? prodAssetPrefix : '',
    publicRuntimeConfig: {
      linkPrefix: isProd ? prodAssetPrefix : '',
    },
  })
);
