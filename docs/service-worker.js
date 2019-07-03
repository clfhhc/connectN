self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/ZrkLxfhuX5pbc5NXvcutt/pages/_app.js",
    "revision": "8d7e65e0b4487d8d9638"
  },
  {
    "url": "/connectN/_next/static/ZrkLxfhuX5pbc5NXvcutt/pages/_error.js",
    "revision": "117aa12f0ad731f314ec"
  },
  {
    "url": "/connectN/_next/static/ZrkLxfhuX5pbc5NXvcutt/pages/about.js",
    "revision": "121a991b318bc5ed62d7"
  },
  {
    "url": "/connectN/_next/static/ZrkLxfhuX5pbc5NXvcutt/pages/index.js",
    "revision": "ad3105d2dd9afd7abc41"
  },
  {
    "url": "/connectN/_next/static/ZrkLxfhuX5pbc5NXvcutt/pages/loading.js",
    "revision": "a61a0e92d20c4515a1f6"
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
