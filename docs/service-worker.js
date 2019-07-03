self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/EI1xIXlyI7qGEjgol7VTC/pages/_app.js",
    "revision": "8f3f39c795774ececaaa"
  },
  {
    "url": "/connectN/_next/static/EI1xIXlyI7qGEjgol7VTC/pages/_error.js",
    "revision": "5462d5a6ed1974dfab77"
  },
  {
    "url": "/connectN/_next/static/EI1xIXlyI7qGEjgol7VTC/pages/about.js",
    "revision": "6245c91793be9903b29f"
  },
  {
    "url": "/connectN/_next/static/EI1xIXlyI7qGEjgol7VTC/pages/connectN.js",
    "revision": "c3af3ebd59ca31c5bd0b"
  },
  {
    "url": "/connectN/_next/static/EI1xIXlyI7qGEjgol7VTC/pages/index.js",
    "revision": "144f5bee3c63bed323af"
  },
  {
    "url": "/connectN/_next/static/EI1xIXlyI7qGEjgol7VTC/pages/loading.js",
    "revision": "7c67416dbe7e667d2a07"
  },
  {
    "url": "/connectN/_next/static/chunks/commons.2c19f9333690d003f6d9.js",
    "revision": "ea31049d4ea823e860c4"
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
