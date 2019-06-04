<template>
  <q-page class="flex flex-center">
    <h2 class="text-primary">Publicaciones</h2>
    <pubResumida v-for="p in publi" v-bind:key="p.title" v-bind:title="p.title" v-bind:category="p.category" v-bind:description="p.description" v-bind:zone="p.zone"></pubResumida>
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
  }, 
  data: function() {
    return {
      publi: []
    }
  },
  created() {
    fetch('http://localhost:8081/api/publicaciones')
      .then((respuesta) => {
        console.log(respuesta)
          return respuesta.json()
        })
        .then((resp) => {
          this.publi = resp
        })
  }
}

</script>
