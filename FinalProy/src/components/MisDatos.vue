<template>
  <q-page>
    <div class="hello">
      <h3>Mis datos {{ name }}</h3>
      <q-btn color="primary" icon="edit" @click.native="$router.push('/misdatos/editar')">Editar</q-btn>
      <div class="q-pa-md row items-start q-gutter-md">
        <div class="text-h6"></div>
        <div class="text-subtitle2">by John Doe</div>
            {{ lorem }}
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'MisDatos',
  props: {
    name: String,
    lorem: String
  },
  created (){
    console.log(this.$router.currentRoute.query.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
