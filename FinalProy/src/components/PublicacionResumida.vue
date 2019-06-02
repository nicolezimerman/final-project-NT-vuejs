<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" style="padding: 5%;">
      <img src="https://d26lpennugtm8s.cloudfront.net/stores/281/365/products/81-ffacafd7dbe8207b1f15132913907866-1024-1024.jpg"  style="width:100%;">

      <q-card-section>
        <h4 class="text-h4 text-black text-left">{{ title }} </h4>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle2 text-primary">{{ category }}</div>
        <p class="text-body2">{{ description }}</p>
        <p class="text-body2">Zona de retiro: {{ zone }}</p>
      </q-card-section>
      <q-btn color="primary" label="Ver más" />
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'PubResumida',
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
