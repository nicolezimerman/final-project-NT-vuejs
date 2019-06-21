<template>
  <q-page class="flex flex-center">
    <div class="flex flex-center" style="width: 100%;">
      <h2 class="text-primary">Registarse</h2>
    </div>
    <div class="flex flex-center" style="width: 100%; margin:5%;">
      <q-input v-model="nombre" type="text" float-label="Nombre" />
      <q-input v-model="apellido" type="text" float-label="Apellido" />
      <q-input v-model="text" type="text" float-label="Email" />
      <q-input v-model="text" type="text" float-label="Edad" />
      <q-input v-model="text" type="text" float-label="Zona" />
      <q-input v-model="password" type="password" float-label="Password" />
      <q-btn
        class="text-white bg-primary"
        style="width: 90%; margin:5%;"
        @click.native="$router.push('/login')">Crear cuenta</q-btn>
    </div>
  </q-page> 
</template>

<style scoped>
.q-input{
  width: 90%;
}
</style>

<script>
export default {
  name: 'Start',
  components: {
  },
  data: function () {
    return {
      nombre: ''
    }
  }
}
</script>