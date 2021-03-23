<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <template #img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        />
      </template>

      <v-app-bar-nav-icon />

      <v-toolbar-title>Sulai Sivadel: Web Developer</v-toolbar-title>

      <v-spacer />
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
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template #extension>
        <v-tabs align-with-title>
          <router-link to="/">
            <v-tab>Home</v-tab>
          </router-link>
          <router-link to="/">
            <v-tab>Apps</v-tab>
          </router-link>
          <router-link to="/">
            <v-tab>Clients</v-tab>
          </router-link>
          <router-link to="/">
            <v-tab>Experience</v-tab>
          </router-link>
          <router-link to="/">
            <v-tab>Blog</v-tab>
          </router-link>
          <router-link to="/">
            <v-tab>Recipes</v-tab>
          </router-link>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 300px;" />
    </v-sheet>
  </v-card>
</template>

<script>
  export default {}
</script>
