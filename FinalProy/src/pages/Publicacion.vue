<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md flex flex-center">
      <div  >
        <img v-bind:src="image" style="max-width:100%;">
        <p class="q-body-2 text-primary">{{ category }}</p>
        <p class="q-title text-black">{{ title }}</p>
        <p class="text-body">{{ description }}</p>
        <p class="text-body">Zona de retiro: {{ zone }}</p>
        <div class="flex flex-center">
          <q-btn v-if="this.state == 'available'"  class="text-white bg-primary" label="Reservar" @click="reservarPublicacion()"/>
          <q-btn v-else class="text-white bg-primary" label="reservado" disable />
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
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
      state:'',
      owner: null,
      reservedby: null,
      image: '',
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
      this.state = resp.state
      this.owner = resp.owner
      this.reservedby = resp.reservedby
      this.image = resp.image
    })
  },
  methods:{
    reservarPublicacion(){
      const publi = {
          "id": this.id,
          "title": this.title,
          "description": this.description,
          "category": this.category,
          "zone": this.zone,
          "keyword": this.keyword,
          "state": 'reserved',
          "owner": this.owner,
          "reservedby": this.$store.state.user.id,
          "image": this.image
      }
      const uri = "http://localhost:8081/api/publicaciones/"+this.id
      fetch(uri,{
        method: "PUT",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(publi)
      })
      .then(response => {
        const user = response.data
        console.log("Request ok - Publicacion reservada")
        this.$router.push("/micuenta")
      })
      .catch(error => {
        console.log("Error: " +error)
      })
    }
  }
}
</script>
