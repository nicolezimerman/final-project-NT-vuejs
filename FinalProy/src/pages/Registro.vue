<template>
  <q-page class="flex flex-center">
    <div class="flex flex-center" style="width: 100%;">
      <h2 class="text-primary">Registrarse</h2>
    </div>
    <div class="flex flex-center" style="width: 100%; margin:5%;">
       <q-input filled v-model="name" placeholder="Nombre" hint="With placeholder" />
      <q-input filled v-model="lastname" placeholder="Apellido" hint="With placeholder" />
      <q-input filled v-model="age" placeholder="Edad" hint="With placeholder" />
      <q-input filled v-model="email" placeholder="Email" hint="With placeholder" />
      <q-input filled v-model="zone" placeholder="Zona de retiro" hint="With placeholder"/>
      <q-input filled v-model="password" type="password" placeholder="Contraseña"/> 
      <q-btn
        class="text-white bg-primary"
        style="width: 90%; margin:5%;"
        @click="registrarUsuario()">Crear cuenta</q-btn>
    </div>
  </q-page> 
</template>

<style scoped>
.q-input{
  width: 90%;
}
</style>

<script>
const axios = require('axios');

export default {
  name: 'Registro',
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
  methods:{
    registrarUsuario(){
      const uri = "http://localhost:8081/api/usuarios"
      axios.post(uri, {
        "name": this.name,
        "lastname": this.lastname,
        "age": this.age,
        "email": this.email,
        "zone": this.zone,
        "password": this.password
      })
      .then(response => {
        const user = response.data
        console.log("Request ok - Usuario registrado")
        this.$store.commit('loggedin',user)
        console.log(this.$store.state.user)
        console.log("Sesión iniciada")
        this.$router.push("/")
      })
      .catch(error => {
        console.log(error)
      })
    }

  }
}
</script>