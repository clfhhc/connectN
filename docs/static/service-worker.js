self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/chunks/commons.534aa6d02e011dba7c8c.js",
    "revision": "b7b072ae369c940c86f3"
  },
  {
    "url": "/connectN/_next/static/hGrvvEcXvRDcf8roxq3m3/pages/_app.js",
    "revision": "7921415ffaea437f5ef2"
  },
  {
    "url": "/connectN/_next/static/hGrvvEcXvRDcf8roxq3m3/pages/_error.js",
    "revision": "827e86e7ee7fd10b5a10"
  },
  {
    "url": "/connectN/_next/static/hGrvvEcXvRDcf8roxq3m3/pages/about.js",
    "revision": "e216883ae3ec518dd9ab"
  },
  {
    "url": "/connectN/_next/static/hGrvvEcXvRDcf8roxq3m3/pages/index.js",
    "revision": "85eb48f0d2bba286929f"
  },
  {
    "url": "/connectN/_next/static/hGrvvEcXvRDcf8roxq3m3/pages/loading.js",
    "revision": "fd7dff3c218e0ea1f495"
  },
  {
    "url": "/connectN/_next/static/runtime/main-77e5628d7ff0e2afdddc.js",
    "revision": "b1ffe479517d7a156e11"
  },
  {
    "url": "/connectN/_next/static/runtime/webpack-a79426b5e11f0ba5879d.js",
    "revision": "d284d55719907d9579fa"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
