<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          FN App
          <div slot="subtitle">v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Menú</q-list-header>
        <q-item @click.native="$router.push('/micuenta')">
          <q-item-side icon="account_circle" />
          <q-item-main label="Mi cuenta" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click.native="$router.push('/publicaciones')">
          <q-item-side icon="list" />
          <q-item-main label="Publicaciones" sublabel="github.com/quasarframework" />
        </q-item>
        <q-item @click.native="$router.push('/publicar')">
          <q-item-side icon="chrome_reader_mode" />
          <q-item-main label="Publicar" sublabel="github.com/quasarframework" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
