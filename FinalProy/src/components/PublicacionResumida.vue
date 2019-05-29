<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://d26lpennugtm8s.cloudfront.net/stores/281/365/products/81-ffacafd7dbe8207b1f15132913907866-1024-1024.jpg"  style="width:100%;">

      <q-card-section>
        <div class="text-h6">{{ title }}</div>
        <div class="text-subtitle2">{{ category }}</div>
      </q-card-section>

      <q-card-section>
        {{ description }}
      </q-card-section>
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
    image: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
