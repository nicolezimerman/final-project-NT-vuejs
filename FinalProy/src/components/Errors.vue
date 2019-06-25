<template>
  <div class="container flex flex-center">
  <transition
    enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutRight"
    appear
  >
    <q-alert
      v-if="visible"
      type="negative"
      appear
      :actions="[{ label: 'Cerrar', handler: () => { visible = false } }]"
      class="q-mb-sm flex"
    >
     {{ message }}
    </q-alert>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'Errors',
  props: {
    message: String,
    visible: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
