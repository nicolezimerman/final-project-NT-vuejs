<template>
  <q-page>
    <h2 class="text-primary">Mi cuenta</h2>
<!--     <div class="q-pa-md">  
      <q-btn-group strech>
        <q-btn color="primary" icon="account_circle" label="Mis datos" @click.native="$router.push('/micuenta/misdatos')" ></q-btn>
        <q-btn color="primary" icon="list" label="Mis publicaciones" ></q-btn>
        <q-btn color="primary" icon="web" label="Mis reservas" ></q-btn>
      </q-btn-group>  
    </div> -->
    <misdatos name="nicky" lorem="hola"></misdatos>
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

export default {
  name: 'MiCuenta',
  components: {
    misdatos
  }
}
</script>
