<template>
  <q-page class="flex flex-center">
    <div class="flex flex-center" style="width: 100%;">
      <h2 class="text-primary">Iniciar sesión</h2>
    </div>
    <div class="flex flex-center" style="width: 100%; margin:5%;">
      <q-input v-model="text" type="text" float-label="Email" />
      <q-input v-model="password" type="password" float-label="Password" />
      <a href="/forgotpassword" class="text-grey" style="margin-top:5%;">Olvido su contraseña?</a>
      <q-btn
        class="text-white bg-primary"
        style="width: 90%; margin:5%;"
        @click.native="$router.push('/login')">Iniciar sesión</q-btn>
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
  }
}
</script>
