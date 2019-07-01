self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/0U0-zFogVMxmkfcMWdeEt/pages/_app.js",
    "revision": "ceba96e727b492462d12"
  },
  {
    "url": "/connectN/_next/static/0U0-zFogVMxmkfcMWdeEt/pages/_error.js",
    "revision": "fdc6d95fb2e2582c05f9"
  },
  {
    "url": "/connectN/_next/static/0U0-zFogVMxmkfcMWdeEt/pages/about.js",
    "revision": "9a498d2d6a8ac774faf3"
  },
  {
    "url": "/connectN/_next/static/0U0-zFogVMxmkfcMWdeEt/pages/index.js",
    "revision": "c7d4edb9e2b49edbadd9"
  },
  {
    "url": "/connectN/_next/static/0U0-zFogVMxmkfcMWdeEt/pages/loading.js",
    "revision": "6696194581943e0e915f"
  },
  {
    "url": "/connectN/_next/static/chunks/commons.534aa6d02e011dba7c8c.js",
    "revision": "b7b072ae369c940c86f3"
  },
  {
    "url": "/connectN/_next/static/runtime/main-db1eb209f792c1c3ecf1.js",
    "revision": "6c9cb6f386b684d24b83"
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
