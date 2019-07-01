self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/chunks/commons.534aa6d02e011dba7c8c.js",
    "revision": "b7b072ae369c940c86f3"
  },
  {
    "url": "/connectN/_next/static/kOIxsNxIPLjYFpfXX54VL/pages/_app.js",
    "revision": "65e338c84c3ec669230b"
  },
  {
    "url": "/connectN/_next/static/kOIxsNxIPLjYFpfXX54VL/pages/_error.js",
    "revision": "67bf2d3d759a3813e4fe"
  },
  {
    "url": "/connectN/_next/static/kOIxsNxIPLjYFpfXX54VL/pages/about.js",
    "revision": "8b53d60b4b945145d5ea"
  },
  {
    "url": "/connectN/_next/static/kOIxsNxIPLjYFpfXX54VL/pages/index.js",
    "revision": "8dda8b1c25bb3748f077"
  },
  {
    "url": "/connectN/_next/static/kOIxsNxIPLjYFpfXX54VL/pages/loading.js",
    "revision": "51f17f3f22ca2a383d13"
  },
  {
    "url": "/connectN/_next/static/runtime/main-c9b90ecaf9aac26230e5.js",
    "revision": "17b9cc30dc39b4f79447"
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
