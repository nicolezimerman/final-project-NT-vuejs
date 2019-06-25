<template>
  <q-card>
  <div class="flex flex-center container">
    <h3>Mis datos</h3>
    <div class="parent">
    <form> <!-- completar --->
      <q-input filled v-model="name" placeholder="Nombre" hint="With placeholder" />
      <q-input filled v-model="lastname" placeholder="Apellido" hint="With placeholder" />
      <q-input filled v-model="age" placeholder="Edad" hint="With placeholder" />
      <q-input filled v-model="email" placeholder="Email" hint="With placeholder" />
      <q-input filled v-model="zone" placeholder="Zona de retiro" hint="With placeholder" />
      <q-btn class="row bg-primary text-white" style="margin: 5%;" icon="edit" @click="actualizarDatos()">Actualizar datos</q-btn>
    </form>
    </div>
    
  </div>
  </q-card>
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
      zone: ''
    }
  },
  created() {
      console.log
      this.id = this.$store.state.user.id,
      this.name = this.$store.state.user.nombre,
      this.lastname = this.$store.state.user.apellido,
      this.age = this.$store.state.user.edad,
      this.email = this.$store.state.user.email,
      this.zone = this.$store.state.user.zona
  },
  methods:{
    actualizarDatos(){
      console.log("editado: " +this.name)
      console.log("original: " +this.$store.state.user.nombre)
      const uri = 'http://localhost:8081/api/usuarios/'+this.id
      axios.put(uri,
      {
        id: this.id,
        nombre: this.name,
        apellido: this.lastname,
        edad: this.age,
        email: this.email,
        zona: this.zone
      }).then(response => {
        const user = response.data
        console.log("Request ok - Usuario actualizado")
        this.$store.commit('updateUser',user)
        console.log(this.$store.state.user)
      })
      .catch(error => {
        console.log(error)
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
