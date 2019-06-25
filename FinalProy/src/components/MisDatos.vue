<template>
  <div class="flex flex-center">
    <h3>Mis datos</h3>
    <div class="row justify-center" style="width: 500px; max-width: 90vw;">  
      <q-list style="min-width: 100%">
      <form style="min-width: 100%;padding:5%;"> <!-- completar --->
        <q-input filled v-model="name" placeholder="Nombre" hint="With placeholder" />
        <q-input filled v-model="lastname" placeholder="Apellido" hint="With placeholder" />
        <q-input filled v-model="age" placeholder="Edad" hint="With placeholder" />
        <q-input filled v-model="email" placeholder="Email" hint="With placeholder" />
        <q-input filled v-model="zone" placeholder="Zona de retiro" hint="With placeholder" />
        <q-input filled type="password" v-model="password" placeholder="Contraseña" hint="With placeholder" />
        <div class="flex flex-center">
          <q-btn class="row bg-primary text-white" style="margin: 5%;" icon="edit" @click="actualizarDatos()">Actualizar datos</q-btn>
        </div>
      </form>
      </q-list>
    </div>  
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'MisDatos',
  data: function() {
    return {
      id: '',
      name: '',
      lastname: '',
      age: '', 
      email: '',
      zone: '',
      password: ''
    }
  },
  created() {
      console.log
      this.id = this.$store.state.user.id,
      this.name = this.$store.state.user.name,
      this.lastname = this.$store.state.user.lastname,
      this.age = this.$store.state.user.age,
      this.email = this.$store.state.user.email,
      this.zone = this.$store.state.user.zone
      this.password = this.$store.state.user.password
  },
  methods:{
    actualizarDatos(){
      console.log("editado: " +this.name)
      console.log("original: " +this.$store.state.user.name)
      const uri = 'http://localhost:8081/api/usuarios/'+this.id
      const usuario = {
        "id": this.id,
        "name": this.name,
        "lastname": this.lastname,
        "age": this.age,
        "email": this.email,
        "zone": this.zone,
        "password": this.password
      }
      axios.put(uri, usuario
      ).then(response => {
        const user = response.data
        console.log("Request ok - Usuario actualizado")
        this.$store.commit('updateUser', user)
        console.log(this.$store.state.user)
      })
      .catch(error => {
        console.log("Error: " + error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parent{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
</style>
