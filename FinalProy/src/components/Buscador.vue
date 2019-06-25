<template>
  <q-search
    v-model="searchModel"
    :debounce="300"
    placeholder="Buscar"
    icon="search"
  ></q-search>
</template>

<script>
export default {
  name: 'Buscador',
  data: function(){
    return{
      searchModel:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
