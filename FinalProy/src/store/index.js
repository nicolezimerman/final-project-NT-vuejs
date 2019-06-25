// src/store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // Habilita el uso del store desde 'cualquier lado'

export default function () {
  const Store = new Vuex.Store({
    state: { // los datos que quiero 'compartir' en la aplicacion
      session: true,
      user: { //eliminar esta info para entregar
        id:1,
        name: "nicole",
        lastname: "zimerman",
        age: 24,
        email: "nzimer@gmail.com",
        zone: "almagro",
        password: "123456"
      },
      message: '',
      visible: false
    },
    mutations: { // son funciones que modifican en estado
      loggedin: function (state,valor){
          state.session = true
          state.user = valor
        },
      loggedout: function (state) {
        state.session = false
        state.user = {}
      },
      updateUser: function(state,valor){
        state.user = valor
      },
      changeValue: function (state, valor) {
        state.count = valor
      },
      showErrors: function(state, payload){
        state.message = payload.mensaje,
        state.visible = payload.estado
      },
      hideErrors: function(state){
        state.message = ''
        state.visible = false
      }
    }
  })

  return Store
}
