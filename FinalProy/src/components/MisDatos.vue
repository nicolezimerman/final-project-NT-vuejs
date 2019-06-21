<template>
  <q-card>
  <div class="flex flex-center container">
    <h3>Mis datos</h3>
    <div class="parent">
    <form action="/action_page.php"> <!-- completar --->
      <q-input filled v-model="name" placeholder="Nombre" hint="With placeholder" :dense="dense" />
      <q-input filled v-model="lastname" placeholder="Apellido" hint="With placeholder" :dense="dense" />
      <q-input filled v-model="age" placeholder="Edad" hint="With placeholder" :dense="dense" />
      <q-input filled v-model="email" placeholder="Email" hint="With placeholder" :dense="dense" />
      <q-input filled v-model="zone" placeholder="Zona de retiro" hint="With placeholder" :dense="dense" />
      <q-btn class="row bg-primary text-white" style="margin: 5%;" icon="edit" @click.native="$router.push('/misdatos/editar')">Editar</q-btn>
    </form>
    </div>
    
  </div>
  </q-card>
</template>

<script>
export default {
  name: 'MisDatos',
  props: {
    name: String,
    lastname: String,
    age: Number,
    email: String,
    zone: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parent{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
</style>
