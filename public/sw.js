const CACHE_NAME = 'json-tools-v1';
const ASSETS = [
  '/',
  '/index.astro',
  '/formatter',
  '/validator',
  '/minify',
  '/compare',
  '/converter',
  '/favicon.svg',
  '/site.webmanifest'
];

// 安装 Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// 激活 Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// 拦截请求
self.addEventListener('fetch', (event) => {
  // 跳过跨域请求
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // 网络优先策略
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // 克隆响应
        const responseClone = response.clone();
        
        // 缓存成功响应
        if (response.status === 200) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        
        return response;
      })
      .catch(() => {
        // 网络失败时从缓存返回
        return caches.match(event.request);
      })
  );
});
