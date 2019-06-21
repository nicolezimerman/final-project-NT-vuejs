<template>
  <div class="flex flex-center bg-primary">
    <h3>Mis publicaciones</h3>
    <div class="q-pa-md row items-start q-gutter-md">
      <div class="text-h6"></div>
      <div class="bg-white row">publicación 1</div>
      <div class="bg-white row">publicación 1</div>
      <div class="bg-white row">publicación 1</div>
      <q-btn color="primary" icon="edit" @click.native="$router.push('/misdatos/editar')">Editar</q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MisPublicaciones',
  /*created (){
    console.log(this.$router.currentRoute.query.id)
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
