<template>
  <section
    id="recent-projects"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="12"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />

        <base-heading>
          Recent Projects
        </base-heading>

        <base-text class="mb-5">
          <p class="text-left">
            Project 1. 
          </p>
          <p class="text-left">
            Party Dash  
            <a 
              href="https://www.partydash.com/" 
              target="_blank"
            > <p class="font-weight-black">https://partydash.com/ </p>
            </a>
          </p>
          <p class="text-left">
            Front-End Design
          </p>
          <p class="text-left">
            •	We built Party Dash with a simple goal in mind: to help party hosts plan parties more easily
          </p>
          <p 
            class="text-left"
          >
            •	Responsibilities: Follow design specs handed down from site owner. Used CSS and HTML to create inviting website
            Technologies used: HTML, CSS, Bootstrap
          </p>
        </base-text>
         <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="6"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />

        <base-heading>
          
        </base-heading>

        <base-text class="mb-5">
          <p class="text-left">
          Project 2. 
          </p>
          <p class="text-left">
            RuneSkype
            <a 
              href="https://runeskype.herokuapp.com/play" 
              target="_blank"
            > <p class="font-weight-black">https://runeskype.herokuapp.com/ </p>
            </a>
          </p>
          <p class="text-left">
            Front-end design, Linting, cleaning up frontend and backend code and making sure both sides work together.
          </p>
          <p class="text-left">
            ●	RuneSkype is the newest way for friends to interact while playing your favorite Role Playing Game (RPG) RuneSkype. Playing RuneSkype is easy, just download a copy from our homepage or our repo:
          </p>
          <p 
            class="text-left"
          >
            ●	Responsibilities:  Wrote clean, presentable code. Kept group on time and on track to present at Project Demo Day.
            Technologies used: ReactJS, ChanceJS, Node, Express, Firebase, Twilio-Video, Twilio, WebRTC, Axios. Express, Faker, jQuery, React-dnd, React-dnd-html5-backend,React-dom,  React-draggable, React-router-dom, Webpack-dev-middleware, Webpack hot-middleware
          </p>
        </base-text>
      </v-col>
         </v-row>

        <v-card color="secondary">
          <v-container class="pa-2">
            <v-row>
              <v-col
                v-for="project in projects"
                :key="project"
                cols="12"
                md="6"
              >
                <a href="#">
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
      </v-col>
    </v-row>
  </section>
</template>

<style lang="scss" scoped>

</style>




<script>
  export default {
    name: 'RecentProjects',

    data: () => ({
      projects: [
        'project1',
        'project2',
        'project3',
        'project4',
      ],
    }),
  }
</script>
