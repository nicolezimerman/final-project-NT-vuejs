<template>
  <q-page class="flex flex-center">
    <h2 class="text-primary">Publicaciones</h2>
    <pubResumida title="Sillon dos plazas" category="Sillones" description="Sillon de dos plazas de ecocuero. 5 años de uso." zone="Villa crespo"></pubResumida>
    <pubResumida title="Set de cubiertos" category="Vajilla" description="Set de cubiertos." zone="Almagro"></pubResumida>
    <pubResumida title="Lavarropas whirphol" category="Electrodomesticos" description="Lavarropas con secador marca whirphol." zone="Villa urquiza"></pubResumida>
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
