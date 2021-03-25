<template>
  <v-card class="overflow-hidden">
    <template #img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      />
    </template>

    <v-app-bar-nav-icon />

    <v-card-title
      primary-title
      class="justify-center"
    >
      Sulai Sivadel: Web Developer
    </v-card-title>

    <v-menu
      bottom
      left
    >
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          color="yellow"
          v-bind="attrs"
          v-on="on"
        />
      </template>

      <v-list>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list>
    </v-menu>

    <template #extension>
      <v-app-bar
        color="blue"
      />
    </template>
    <v-container style="height: 300px;" />
  </v-card>
</template>

<script>
  export default {}
</script>
