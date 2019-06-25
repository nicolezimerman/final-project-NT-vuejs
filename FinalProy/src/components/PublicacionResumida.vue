<template>
  <div class="q-pa-md row items-start q-gutter-md" >
    <q-card class="my-card flex" style="padding: 5%; min-width:100%;">
      <div style="width:40%; margin-right:5%;">
        <img v-bind:src="image" style="width:100%;" />
      </div>
      <div style="width:55%;">
        <h4 class="q-body-2 text-left">{{ title }} </h4>
        <p class="q-body-2 text-primary">{{ category }}</p>
        <p class="q-caption">{{ description }}</p>
      </div>
      <div style="width:100%;" class="flex flex-center">
        <q-btn
      color="primary"
      label="Ver más"
      @click.native="$router.push({path: `/publicacion/${id}`})" />
      </div>    
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'PubResumida',
  props: {
    id: Number,
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
