<template>
  <div class="flex flex-center">
    <h3>Mis publicaciones</h3>
    <div class="row justify-center" style="width: 500px; max-width: 90vw;">  
      <q-list sparse link separator highlight style="min-width:100%;">
        <q-item multiline v-for="p in mispubli" v-bind:key="p.id">
          <q-item-side left v-bind:avatar="p.image" />
          <q-item-main v-bind:label="p.title"
            label-lines="1"
            v-bind:sublabel="p.description"
            sublabel-lines="2"/>
          <q-item-side right >
            <q-btn
              color="primary"
              icon="edit"
              @click.native="$router.push({path: `/publicacion/editar/${p.id}`})" />
          </q-item-side >
        </q-item>
      </q-list>
      <div v-if="mispubli.length==0"> No hay pubicaciones para mostrar</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MisPublicaciones',
  data: function() {
    return{
      mispubli: []
    }
  },
  created (){
    const uri = "http://localhost:8081/api/publicaciones?owner="+this.$store.state.user.id
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
          this.mispubli = resp
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4{
  margin:5%;
}
</style>
