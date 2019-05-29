<template>
  <q-page class="flex flex-center">
    <h2>Mi cuenta</h2>
    <datos name="asd" lorem="prueba"></datos>
  </q-page>
</template>

<style>
</style>

<script>
import datos from '../components/Datos'

export default {
  name: 'MiCuenta',
  components: {
    datos
  }
}
</script>
