<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md flex flex-center">
      <div  >
        <img v-bind:src="image" style="max-width:80%;">
        <h4 class="text-primary">{{ title }}</h4>
        <q-chip class="text-white bg-primary">{{ category }}</q-chip>
        <p class="text-body">{{ description }}</p>
        <p class="text-body">Zona de retiro: {{ zone }}</p>
        
        <q-btn class="text-white bg-primary" label="Reservar"/>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import publicacion from '../components/Publicacion'
export default {
  name: 'Publicacion',
  data: function(){
    return{
      id:'',
      title: '',
      category: '',
      description: '',
      zone: '',
      image: ''
    }
  }, 
  created(){
    const uri= "http://localhost:8081/api/publicaciones/"+this.$route.params.id
    console.log(uri)
    fetch(uri)
    .then((respuesta) => {
      console.log(respuesta)
      return respuesta.json()
      })
    .then((resp) => {
      console.log(resp)
      this.id = resp.id
      this.title = resp.title
      this.description = resp.description
      this.category = resp.category
      this.zone = resp.zone
      this.image = resp.image
    })
  }
}
</script>
