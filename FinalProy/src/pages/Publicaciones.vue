<template>
  <q-page class="flex flex-center">
    <h2>Publicaciones</h2>
    <pubResumida title="Sillon dos plazas" category="Sillones" description="Sillon de dos plazas de ecocuero. 5 años de uso."></pubResumida>
    <pubResumida title="Set de cubiertos" category="Vajilla" description="Set de cubiertos."></pubResumida>
    <pubResumida title="Lavarropas whirphol" category="Electrodomesticos" description="Lavarropas con secador marca whirphol."></pubResumida>
  </q-page>
</template>

<style>
</style>

<script>
import pubResumida from '../components/PublicacionResumida'

export default {
  name: 'Publicaciones',
  components: {
    pubResumida
  }
}
</script>
