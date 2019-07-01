self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/8tFRcxF4D4Z5iOn8VlZOT/pages/_app.js",
    "revision": "89df0bf9d7ee1f0f447d"
  },
  {
    "url": "/connectN/_next/static/8tFRcxF4D4Z5iOn8VlZOT/pages/_error.js",
    "revision": "9cc98f7258cc12662c8f"
  },
  {
    "url": "/connectN/_next/static/8tFRcxF4D4Z5iOn8VlZOT/pages/about.js",
    "revision": "8e783ab2bea51726f6bf"
  },
  {
    "url": "/connectN/_next/static/8tFRcxF4D4Z5iOn8VlZOT/pages/index.js",
    "revision": "dcb730bc5dd2d89fc107"
  },
  {
    "url": "/connectN/_next/static/8tFRcxF4D4Z5iOn8VlZOT/pages/loading.js",
    "revision": "79712ca57516f4b5b5d8"
  },
  {
    "url": "/connectN/_next/static/chunks/commons.534aa6d02e011dba7c8c.js",
    "revision": "b7b072ae369c940c86f3"
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
