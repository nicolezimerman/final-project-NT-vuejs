
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'micuenta', component: () => import('pages/MiCuenta.vue') },
      { path: 'publicaciones', component: () => import('pages/Publicaciones.vue') },
      { path: 'publicacion', component: () => import('pages/Publicacion.vue') },
      { path: 'publicar', component: () => import('pages/Publicar.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
