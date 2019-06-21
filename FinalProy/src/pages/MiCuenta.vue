<template>
  <q-page>
    <div class="container flex flex-center">
      <h2 class="text-primary">Mi cuenta</h2>
     <!--<div class="q-pa-md">  
      <q-btn-group strech>
        <q-btn color="primary" icon="account_circle" label="Mis datos" @click.native="$router.push('/micuenta/misdatos')" ></q-btn>
        <q-btn color="primary" icon="list" label="Mis publicaciones" ></q-btn>
        <q-btn color="primary" icon="web" label="Mis reservas" ></q-btn>
      </q-btn-group>  
    </div>-->
    <misdatos v-bind:name="name" v-bind:lastname="lastname" v-bind:age="age" v-bind:email="email" v-bind:zone="zone"></misdatos>
    <mispublicaciones></mispublicaciones>
    </div>
  </q-page> 
</template>

<style scoped>
.qtabs{
  display: flex;
  justify-content: center;
}
</style>

<script>
import misdatos from '../components/MisDatos'
import mispublicaciones from '../components/MisPublicaciones'

export default {
  name: 'MiCuenta',
  components: {
    misdatos,
    mispublicaciones
  },
  data: function() {
    return {
      id: '',
      name: '',
      lastname: '',
      age: '', 
      email: '',
      zone: ''
    }
  },
  created() {
    fetch('http://localhost:8081/api/usuarios/'+this.$store.id)
    .then((respuesta) => {
      return respuesta.json()
    })
    .then((resp) => {
      console.log(resp)
      this.id = resp.id,
      this.name = resp.nombre,
      this.lastname = resp.apellido,
      this.age = resp.edad,
      this.email = resp.email,
      this.zone = resp.zona
    })
  }
}
</script>
