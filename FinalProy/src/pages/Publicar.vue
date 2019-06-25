<template>
  <q-page>
    <div class="container flex flex-center">
      <h2 class="text-primary">Crear publicación</h2>
      <div>
        <form enctype="multipart/form-data"> <!-- completar -->
          <q-input filled v-model="title" placeholder="Título de la publicacíon" hint="With placeholder" />
          <q-select type="list" filled v-model="category" :options="categoryOptions" placeholder="Seleccione una categoría" />
          <q-input filled v-model="description" placeholder="Descripción" hint="With placeholder" />
          <q-input filled v-model="zone" placeholder="Zona de retiro" hint="With placeholder" />
          <q-input filled v-model="keyword" placeholder="Palabras claves" hint="With placeholder" />
          <q-input
            filled
            type="file"
            v-model="image"
            hint="Native file"
            id="fileinput" 
            ref="file"
            />
            <br>
            <div class="flex flex-center">
              <q-btn class="text-white bg-primary" label="Guardar" @click="crearPublicacion()"/>
            </div>
        </form>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { async } from 'q';
const axios = require('axios')

export default {
  name: 'Publicar',
  data () {
    return {
      title: '',
      description: '',
      category: '',
      zone: '',
      keyword: '',
      owner: '',
      reservedby: '',
      image: '',
      categoryOptions: [
        {
          label: 'Muebles',
          value: 'muebles'
        },
        {
          label: 'Electrodomesticos',
          value: 'electrodomesticos'
        },
        {
          label: 'Vajilla',
          value: 'vajilla'
        },
        {
          label: 'Indumentaria',
          value: 'indumentaria'
        }
      ],
    }
  },
  methods:{
    crearPublicacion(){
      var formData = new FormData();
      var fileField = document.querySelector("input[type='file']");
      var fileArchive = fileField.files[0]
      console.log(fileArchive);
      formData.append('photo', fileArchive);

      const obtenerImg = async () => {
        console.log('Creando imagen')
        const response = await fetch('http://localhost:8081/api/imagenes', {
          method: 'POST',
          body: formData
        })
        const json = await response.json()
        //console.log(json)
        const uriimage = json.self
        console.log("Imagen creada: " + uriimage)
        const publi = {
          "title": this.title,
          "description": this.description,
          "category": this.category,
          "zone": this.zone,
          "keyword": this.keyword,
          "state": 'available',
          "owner": this.$store.state.user.id,
          "reservedby": '',
          "image": uriimage
        }
        console.log(publi)

        const resp = await fetch('http://localhost:8081/api/publicaciones', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
          "title": this.title,
          "description": this.description,
          "category": this.category,
          "zone": this.zone,
          "keyword": this.keyword,
          "state": 'available',
          "owner": this.$store.state.user.id,
          "reservedby": null,
          "image": uriimage
          })
        })
        const publicacion = await resp.data
        console.log(publicacion)
        if(publicacion == undefined){
          fetch('uriimage',{
            method: 'delete'
          })
        }
        //si falla, eliminar la imagen
        //notificar que se creo la publicacion
        //redirigir a mis publicaciones
      }
      obtenerImg()
    }
  }
}
</script>
