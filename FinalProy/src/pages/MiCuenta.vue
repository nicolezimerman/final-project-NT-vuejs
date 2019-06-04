<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <h2 class="text-primary">Mi cuenta</h2>
      <div class="q-gutter-y-md" style="max-width: 600px">

        <q-tabs
          v-model="tab"
          class="text-teal"
        >
          <q-tab name="misdatos" icon="mail" label="Mis datos" />
          <q-tab name="mispublicaciones" icon="alarm" label="Mis publicaciones" />
          <q-tab name="misreservas" icon="movie" label="Mis reservas" />
        </q-tabs>
      </div>
      
      <datos name="asd" lorem="prueba"></datos>
    </div>
    <router-view></router-view>
  </q-page>
</template>

<style>
</style>

<script>
import datos from '../components/MisDatos'

export default {
  name: 'MiCuenta',
  components: {
    datos
  }
}
</script>
