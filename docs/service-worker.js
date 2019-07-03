self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/MIP7xdabNd18MTR2YSlrJ/pages/_app.js",
    "revision": "7cd0bd6420901bab7d51"
  },
  {
    "url": "/connectN/_next/static/MIP7xdabNd18MTR2YSlrJ/pages/_error.js",
    "revision": "dc129ef4e74c06c4aa8c"
  },
  {
    "url": "/connectN/_next/static/MIP7xdabNd18MTR2YSlrJ/pages/about.js",
    "revision": "274236e5f196c21635c7"
  },
  {
    "url": "/connectN/_next/static/MIP7xdabNd18MTR2YSlrJ/pages/index.js",
    "revision": "a1f28dd8a58c85499c43"
  },
  {
    "url": "/connectN/_next/static/MIP7xdabNd18MTR2YSlrJ/pages/loading.js",
    "revision": "18ded1978144e27a9122"
  },
  {
    "url": "/connectN/_next/static/chunks/commons.534aa6d02e011dba7c8c.js",
    "revision": "b7b072ae369c940c86f3"
  },
  {
    "url": "/connectN/_next/static/runtime/main-b27e9113408fba08ef4c.js",
    "revision": "edbe0026a93af48d0ffe"
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
