const CACHE_NAME = 'eternal-truth-v1';
const urlsToCache = [
  '/composition_tool/',
  '/composition_tool/index.html',
  '/composition_tool/style.css',
  '/composition_tool/script.js',
  '/composition_tool/manifest.json',
  '/composition_tool/icon-192.png',
  '/composition_tool/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});