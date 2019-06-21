<template>
  <q-page>
    <div class="container">
      <buscador></buscador>
      <div class="column items-center" style="min-width: 90%;">
        <div class="col" style="width: 100%; margin:5%;">
          <q-btn
          class="text-white bg-primary"
          style="width: 90%;"
          @click.native="$router.push('/micuenta')">Mi cuenta</q-btn>
        </div>
        <div class="col" style="width: 100%; margin:5%;">
          <q-btn
          class="text-white bg-primary"
          style="width: 90%;"
          @click.native="$router.push('/publicaciones')">Buscar publicaciones</q-btn>
        </div>
        <div class="col" style="width: 100%; margin:5%;">
          <q-btn
          class="text-white bg-primary"
          style="width: 90%;"
          @click.native="$router.push('/publicar')">Publicar</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import buscador from '../components/Buscador'

export default {
  name: 'Index',
  components: {
    buscador
  }
}
</script>
