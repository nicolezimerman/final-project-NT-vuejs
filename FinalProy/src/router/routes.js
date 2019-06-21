
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'micuenta/',
        component: () => import('pages/MiCuenta.vue')
        /*children: [
          { path: 'misdatos', component: () => ('components/MisDatos.vue') },
          { path: 'mispublicaciones', component: () => ('components/MisPublicaciones.vue') }
        ]*/ },
      { path: 'publicaciones', component: () => import('pages/Publicaciones.vue') },
      { path: 'publicacion', component: () => import('pages/Publicacion.vue') },
      { path: 'publicar', component: () => import('pages/Publicar.vue') },
      { path: 'inicio', component: () => import('pages/Start.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'signin', component: () => import('pages/Registro.vue') },
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
