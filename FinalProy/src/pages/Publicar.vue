<template>
  <q-page class="flex flex-center">
    <h2 class="text-primary">Crear publicación</h2>
    <publicacionnueva></publicacionnueva>
  </q-page>
</template>

<style>
</style>

<script>
import publicacionnueva from '../components/publicacionNueva'

export default {
  name: 'Publicar',
  components: {
    publicacionnueva
  }
}
</script>
