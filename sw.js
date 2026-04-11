const CACHE_NAME = 'zeze-hub-v1.5.0';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/manifest.json',
  '/favicon.png',
  '/fortunes.json',
  '/about.html',
  '/privacy.html',
  '/terms.html',
  '/contact.html',
  '/hub-guide.html',
  '/insights/',
  '/insights/index.html',
  '/magiclamp/magiclamp.html',
  '/magiclamp/magiclamp-guide.html',
  '/coinflip/coinflip.html',
  '/coinflip/coinflip-guide.html',
  '/destinydice/destinydice.html',
  '/destinydice/destinydice-guide.html',
  '/ladderclimb/ladderclimb.html',
  '/drawinglots/drawinglots.html',
  '/teammaker/teammaker.html',
  '/teammaker/teammaker-guide.html',
  '/cardflip/cardflip.html',
  '/cardflip/cardflip-guide.html',
  '/timebomb/timebomb.html',
  '/timebomb/timebomb-guide.html'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS);
      })
  );
});

// Fetch Assets (Stale-While-Revalidate Strategy)
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and browser extensions
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // Update cache with the new response
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
            // If network fails, we already have the cached response (if any)
        });

        // Return cached response immediately if available, otherwise wait for network
        return cachedResponse || fetchPromise;
      });
    })
  );
});

// Activate and Clean Old Cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
  return self.clients.claim();
});
