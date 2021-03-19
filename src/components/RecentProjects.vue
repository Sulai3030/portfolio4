<template>
  <section
    id="recent-projects"
    class="overflow-hidden"
  >
   <div class="text-center">
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    elevation="24"
    outlined
    shaped
  >
    <template>
      <v-progress-linear
        color="deep-purple"
        height="10"
      ></v-progress-linear>
    </template>
    <v-divider></v-divider>
    <v-card-title>Party Dash App</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <p class="text-left">
        <a href="https://www.partydash.com/" target="_blank">https://partydash.com/</a> 
      </p>
      <p class="text-left">
          Front- End Design
      </p>
      <p class="text-left">We built Party Dash with a simple goal in mind: to help party hosts plan parties more easily</p>
    </v-card-text>
    <p class="text-left">
            <ul>
              <li>
                Responsibilities: Follow design specs handed down from site owner. Used CSS and HTML to create inviting website
              </li>
              <li>
                Technologies used: HTML, CSS, Bootstrap
              </li>
            </ul> 
          </p>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
      </v-btn>
    </v-card-actions>
  </v-card>
    <v-card
      elevation="2"
      outlined
      shaped
    >
    </v-card>
    </div>
    <div class="text-center">
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    elevation="24"
    outlined
    shaped
    >
    <template>
      <v-progress-linear
        color="deep-purple"
        height="10"
      ></v-progress-linear>
    </template>
    <v-card-title>RuneSkype</v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <p class="text-left">
        <a href="https://www.partydash.com/" target="_blank">https://runeskype.herokuapp.com/play</a> 
      </p>
      <p class="text-left"> 
        Responisibilities: </p>
      <p class="text-left">Front-end design, Linting, cleaning up frontend and backend code and making sure both sides work together.</p>
      <p class="text-left"> 
        RuneSkype is the newest way for friends to interact while playing your favorite Role Playing Game (RPG) RuneSkype. Playing RuneSkype is easy, just download a copy from our homepage or our repo:</p>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
      </v-btn>
    </v-card-actions>
  </v-card>
    <v-card
      elevation="2"
      outlined
      shaped
    >
    </v-card>
     <v-card
      elevation="2"
      outlined
      shaped
    >
    </v-card>
    </div>
    <div class="text-center">
      <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    elevation="24"
    outlined
    shaped
  >
    <template>
      <v-progress-linear
        color="deep-purple"
        height="10"
      ></v-progress-linear>
    </template>
    <v-card-title>The GOAT Voter App </v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
      </v-row>
      <p class="text-left">
        <a href="https://www.partydash.com/" target="_blank">https://www.goatvoter.org/</a> 
      </p>
      
      <p class="text-left"> 
        Responisibilities: </p>
      <p class="text-left">Front-End Design, created the color scheme and front-end components.</p>
      <p class="text-left"> 
        The GOAT Voter App is a one-stop platform where voters can access information about candidates running for political offices anywhere in the United States. The GOAT Voter App streamlines information and increases voter participation.</p>
      <p class="text-left"> 
          By entering their zip code in a search field, users will be able to search and access detailed inforabout all candidates running for election in their district. In addition, users can enter their addrfind out where their nearest polling site is located and request transportation on election day.</p>
          <p class="text-left"> 
          Technologies used: JavaScript, Handlebars, Bootstrap, CSS Parallax, Node.js, Express, Sequelize, Google Civic Information API, Heroku</p>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
       
      </v-btn>
    </v-card-actions>
  </v-card>
    <v-card
      elevation="2"
      outlined
      shaped
    >
    </v-card>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.recent-projects{
  width: 2900px;
  
  }
.a{
  color: #000;
}
 

</style>




<script>
   export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
