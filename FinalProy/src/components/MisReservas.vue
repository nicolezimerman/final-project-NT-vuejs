<template>
  <div class="flex flex-center">
    <h3>Mis reservas</h3>
    <div class="row justify-center" style="width: 500px; max-width: 90vw;">
      <q-list sparse link separator highlight style="min-width:100%;">
        <q-item multiline v-for="r in misreservas" v-bind:key="r.id">
          <q-item-side left v-bind:avatar="r.image" />
          <q-item-main v-bind:label="r.title"
            label-lines="1"
            v-bind:sublabel="r.description"
            sublabel-lines="2"/>
          <q-item-side right >
            <q-btn
              color="primary"
              icon="pageview"
              @click.native="$router.push({path: `/publicacion/${r.id}`})" />
          </q-item-side >
        </q-item>
      </q-list>
    <div v-if="misreservas.length==0">No hay reservas para mostrar</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MisReservas',
  data: function() {
    return{
      misreservas: []
    }
  },
  created (){
    const uri = "http://localhost:8081/api/publicaciones?reservedby="+this.$store.state.user.id
    fetch(uri)
      .then((respuesta) => {
        console.log(respuesta)
          return respuesta.json()
        })
      .catch((err) =>{
        console.log(err)
        this.$store.commit('showErrors',{ mensaje: 'No se pudieron cargar las publicaciones', estado:true})
      })
        .then((resp) => {
          console.log(resp)
          this.misreservas = resp
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
