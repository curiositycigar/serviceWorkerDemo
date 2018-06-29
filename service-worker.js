// chche polyfill https://github.com/jimmywarting/cache-polyfill
// importScripts('./cache-polyfill.js');
var cacheName = 'weatherApp-v1';
var dataCacheName = 'weatherData-v1';
var assetsCacheName = 'weatherAssets-v1';
var filesToCache = [
  '/',
  '/manifest.json',
  '/index.html',
  '/static/main.js',
  '/static/main.css',
  '/static/fetch.js',
  '/static/cityCode.js'
];
var assetsToCache = [
  '/images/ic_add_white_24px.svg',
  '/images/ic_refresh_white_24px.svg'
]
var urlPrefix = '192.168.213.201:8234';

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] install');
  // 判断是否第一次安装，然后提示用户重启后将会更新应用
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] activate');
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  let url = e.request.url;
  console.log('[ServiceWorker] Fetch ', url);
  if (url.indexOf(urlPrefix) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then(function (cache) {
        return fetch(e.request).then(function (response) {
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
      })
    );
  }
});

// server push
self.addEventListener('push', function (e) {
  let title = 'new message!';
  let body = 'You get a $100 bonus';
  let icon = './images/clear.png';
  let tag = 'simple-push-example-tag';
  console.log('got fake push!')
  e.waitUntil(
    self.registration.showNotification(title, {
      body, icon, tag
    })
  )
});