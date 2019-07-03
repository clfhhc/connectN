// next.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
const withOffline = require('next-offline');
const withManifest = require('next-manifest');
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
/* eslint-enable @typescript-eslint/no-var-requires */

const isProd = process.env.NODE_ENV === 'production';
const prodAssetPrefix = '/connectN';

module.exports = withManifest(
  withOffline(
    withTypescript({
      // typescript settings
      webpack(config, options) {
        // Do not run type checking twice:
        if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

        return config;
      },

      // service-worker settings
      registerSwPrefix: `${prodAssetPrefix}`,
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

      manifest: {
        /* eslint-disable @typescript-eslint/camelcase */
        short_name: 'ConnectN',
        name: 'Connect N',
        start_url: `${prodAssetPrefix}/`,
        background_color: '#ffffff',
        display: 'standalone',
        scope: `${prodAssetPrefix}/`,
        theme_color: '#ffffff',
        icons: [
          {
            src: '/static/icons/icon192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/static/icons/icon512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        /* eslint-enable @typescript-eslint/camelcase */
      },

      // cdn settings
      assetPrefix: isProd ? prodAssetPrefix : '',
      publicRuntimeConfig: {
        linkPrefix: isProd ? prodAssetPrefix : '',
      },
    })
  )
);
