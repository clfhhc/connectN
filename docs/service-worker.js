self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/9u0OjG6G3jz465-ua2opc/pages/_app.js",
    "revision": "bb686cb459c00f0bfcf3"
  },
  {
    "url": "/connectN/_next/static/9u0OjG6G3jz465-ua2opc/pages/_error.js",
    "revision": "f0e0286294d31d36b6a7"
  },
  {
    "url": "/connectN/_next/static/9u0OjG6G3jz465-ua2opc/pages/about.js",
    "revision": "47deec1cb2a134fec2d0"
  },
  {
    "url": "/connectN/_next/static/9u0OjG6G3jz465-ua2opc/pages/index.js",
    "revision": "35113a7b50825579893a"
  },
  {
    "url": "/connectN/_next/static/9u0OjG6G3jz465-ua2opc/pages/loading.js",
    "revision": "7adf9d1cc660f2316e08"
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
