<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="display-1 font-weight-thick mb-4" />
        <h4 class="subheading font-weight-medium text-left">
          <base-text />
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
  export default {
    methods: {
      doSomething: function () {
        alert("Hi, there!");
        this.doSomethingElse();
      },
      doSomethingElse: function () {
        alert("Why are you bothering me?");
      },
    }
  }
</script>
