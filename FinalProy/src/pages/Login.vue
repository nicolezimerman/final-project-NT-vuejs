<template>
  <q-page class="flex flex-center">
    <div class="flex flex-center" style="width: 100%;">
      <h2 class="text-primary">Iniciar sesión</h2>
    </div>
    <div class="flex flex-center" style="width: 100%; margin:5%;">
      <q-input v-model="email" type="text" float-label="Email" />
      <q-input v-model="password" type="password" float-label="Password" />
      <a href="/forgotpassword" class="text-grey" style="margin-top:5%;">Olvido su contraseña?</a>
      <q-btn
        class="text-white bg-primary"
        style="width: 90%; margin:5%;"
        @click="iniciarSesion()">Iniciar sesión</q-btn>
    </div>
  </q-page> 
</template>

<style scoped>
.q-input{
  width: 90%;
}
</style>

<script>
const axios = require('axios')

export default {
  name: 'Start',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    validarDatos(){
      console.log('En el submit')
      var errores = ''
      if(this.email == ''){
        errores += 'El email no puede estar vacio'
      }
    },
    iniciarSesion(){
      axios.get('http://localhost:8081/api/usuarios/' + this.email)
      .then(response => {
        const user = response.data
        console.log("Request ok - Iniciando sesion")
        //console.log("Session: " + this.$store.state.session)
        //Modifico el valor de la sesión.
        this.$store.commit('loggedin',user)
        //this.$store.commit('setUserId',user)
        console.log(this.$store.state.user)
        console.log("Sesión iniciada")
        this.$router.push("/")
      })
      .catch(error => {
        console.log(error)
        this.$store.commit('showErrors', {mensaje: 'error login', estado: true})
      })
    }
  }
}
</script>
