self.addEventListener('install', e =>{
  const cacheProm = caches.open('cache-v1')
      .then(cache => {
          return cache.addAll([
          '/',
          '.hintrc',
          'index.html',
          'styles/style.css',
          'assets/img/css3.png',
          'assets/img/html5.png',
          'assets/img/js.jpg',
          'assets/img/logo.png',
          'assets/img/slide.png',
          'assets/video/movie.mp4'
      ])
        
  });
e.waitUntil(cacheProm);
});


self.addEventListener('fetch', e =>{
const respuesta = caches.match( e.request )
  .then ( res => {
      if ( res ) return res;
      console.log('No existe', e.request.url);
      return fetch( e.request ).then ( newResp => {
          caches.open('cache-v1')
              .then( cache => {
                  cache.put( e.request, newResp);
              }

              )
          return newResp.clone;
      });
  });
  e.respondWith(respuesta);
});
