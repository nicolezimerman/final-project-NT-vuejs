<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <h2 class="text-primary">{{ title }}</h2>
    <div>
      <q-chip class="text-white bg-primary">{{ category }}</q-chip>
      <p class="text-body">{{ description }}</p>
      <p class="text-body">Zona de retiro: {{ zone }}</p>
      <img src="https://d26lpennugtm8s.cloudfront.net/stores/281/365/products/81-ffacafd7dbe8207b1f15132913907866-1024-1024.jpg"  style="width:100%;">
      <q-btn class="text-white bg-primary" label="Reservar"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'publicacion',
  props: {
    title: String,
    category: String,
    description: String,
    zone: String,
    image: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>
