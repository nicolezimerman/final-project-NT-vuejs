<template>
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
            v-model="file"
            hint="Native file"
            id="fileinput" 
            ref="file"
            />
            <br>
          <q-btn class="text-white bg-primary" label="Guardar" @click="subirArchivo()"/>
        </form>
    </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'publicacionnueva',
  data () {
    return {
      title: '',
      description: '',
      category: '',
      zone: '',
      keyword: '',
      file: '',
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
    subirArchivo(){
      var formData = new FormData();
      var fileField = document.querySelector("input[type='file']");
      var fileArchive = fileField.files[0]
      
      console.log(fileArchive);
      
      formData.append('algo', 'algomas');
      formData.append('photo', fileArchive);

      fetch('http://localhost:8081/api/imagenes', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
      /*const urifile;
      const publi=
      {
        id : this.id,
        title : this.title,
        description : this.description,
        category : this.category,
        zone : this.zone,
        keyword : this.keyword,
        file : uploadfile,
        owner: 'http://localhost:8081/api/usuarios/'+this.$storage.id,
        reservedby: ''
      }*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
q-input {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
