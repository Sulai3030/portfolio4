<template>
  <v-btn
    color="secondary"
    rounded
    v-bind="$attrs"
  >
    <slot />
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseBtn',
  }
</script>
