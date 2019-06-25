<template>
  <q-page>
    <div class="container flex flex-center">
      <h2 class="text-primary">Mi cuenta</h2>
      <misdatos></misdatos>
      <mispublicaciones></mispublicaciones>
      <misreservas></misreservas>
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
import misreservas from '../components/MisReservas'

export default {
  name: 'MiCuenta',
  components: {
    misdatos,
    mispublicaciones,
    misreservas
  }
}
</script>
