<template>
  <q-page class="flex flex-center bg-primary">
    <div class="flex flex-center">
      <img src="statics\icons\carrito-de-comida.png" alt="Gratiferia!" style="width:25%;">
      <h2 class="text-white">¡ G R A T I F E R I A !</h2>
    </div>
    <div class=" col flex flex-center" style="width: 100%; margin:5%;">
        <q-btn
        class="text-primary bg-white"
        style="width: 90%; margin:5%;"
        @click.native="$router.push('/signin')">Registrarse</q-btn>
        <q-btn
        class="text-primary bg-white"
        style="width: 90%; margin:5%;"
        @click.native="$router.push('/login')">Iniciar sesión</q-btn>
    </div>
  </q-page> 
</template>

<style>
</style>

<script>
export default {
  name: 'Start'
}
</script>
