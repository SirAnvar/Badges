var cacheName = 'badge-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/CSS/style.css',
    'JS/main.js'
];

// Start Service Worker and cache files
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

// Serve cached content when offline
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});