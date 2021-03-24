<template>
  <div id="app">
    <v-app>
      <core-app-bar />

      <core-view />
      
      <core-footer />
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'App',

    components: {
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreView: () => import('@/components/core/View'),
    },
  }
</script>
