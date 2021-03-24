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
        <v-tabs align-with-title>
          <router-link to="/">
            <v-tab>Home</v-tab>
          </router-link>
          <router-link to="/Applications">
            <v-tab>Apps</v-tab>
          </router-link>
          <router-link to="/Clients">
            <v-tab>Clients</v-tab>
          </router-link>
          <router-link to="/Experience">
            <v-tab>Experience</v-tab>
          </router-link>
          <router-link to="/Skills">
            <v-tab>Skills</v-tab>
          </router-link>
          <router-link to="/Blog">
            <v-tab>Blog</v-tab>
          </router-link>
          <router-link to="/Contact">
            <v-tab>Contact</v-tab>
          </router-link>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
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
