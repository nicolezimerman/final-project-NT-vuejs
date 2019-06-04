<template>
      <div style="width: 90%">
        <form action="/action_page.php"> <!-- completar -->
          <q-input filled v-model="ph" placeholder="Título de la publicacíon" hint="With placeholder" :dense="dense" />
          <q-select type="list" filled v-model="select" :options="categoryOptions" placeholder="Seleccione una categoría" />
          <q-input filled v-model="ph" placeholder="Descripción" hint="With placeholder" :dense="dense" />
          <q-input filled v-model="ph" placeholder="Zona de retiro" hint="With placeholder" :dense="dense" />
          <q-input filled v-model="ph" placeholder="Palabras claves" hint="With placeholder" :dense="dense" />
          <q-input
            @input="val => { files = val }"
            multiple
            filled
            type="file"
            hint="Native file (multiple)"
            />
            <br>
          <q-btn class="text-white bg-primary" label="Guardar"/>
        </form>
    </div>
</template>

<script>
export default {
  name: 'publicacionnueva',
  data () {
    return {
      categoryOptions: [
        {
          label: 'Muebles',
          value: 'muebles'
        },
        {
          label: 'Electrodomesticos',
          value: 'electrodomesticos'
        },
        {
          label: 'Vajilla',
          value: 'vajilla'
        },
        {
          label: 'Indumentaria',
          value: 'indumentaria'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
q-input {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
