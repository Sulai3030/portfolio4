<template>
  <v-card
    max-width="1200"
    class="mx-auto"
  >
    <v-system-bar
      color="pink darken-2"
      dark
    >
      <v-spacer />
    </v-system-bar>

    <v-app-bar
      dark
      color="pink"
    >
      <v-toolbar-title>Technical Skills</v-toolbar-title>

      <v-spacer />
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline" />

            <v-card-subtitle>
              Languages: JavaScript, Python, CSS, HTML5
              <p />Libraries: VueJs, React.js, React Native, Express, Node JS,
              jQuery, AJAX, Bootstrap
              <p />Databases: MongoDB, MySQL, NoSQL, Firebase
              <p />Templates: Handlebars				
              <p />Version Control: Git/GitHub				
              <p />Creative Cloud: Photoshop, Illustrator, Lightroom
            </v-card-subtitle>
            <v-card-actions>
              <v-btn text />
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#952175"
            dark
          >
            <v-card-title class="headline" />
            <v-card-subtitle>
              Testing: Jest/Enzyme
              <p />Platforms: Drupal, WordPress, 
              jQuery, AJAX, Bootstrap
              <p />Collaboration Software: Slack, Salesforce, 
              <p />Image Editors: GIMP, Photoshop				
              <p />Flowchart Creation: Visio				
              <p />Amazon Web Services (AWS)
            </v-card-subtitle>
            <v-card-actions>
              <v-btn text />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [],
    }),
  }
</script>