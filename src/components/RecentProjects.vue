<template>
  <section
    id="recent-projects"
    class="overflow-hidden"
  >
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
          Recent Projects
        </base-heading>

        <base-text class="mb-5">
          <p class="text-left">
            Project 1. 
          </p>
          <p class="text-left font-weight-black">
            Party Dash<br />  
          </p>
          <div class="white text-left">
                <a href="https://www.partydash.com/" target="_blank">https://partydash.com/</a> 
          </div>
          <p class="text-left">
            Front-End Design
          </p>
          <p class="text-left">
            <ul>
              <li>We built Party Dash with a simple goal in mind: to help party hosts plan parties more easily</li>
            </ul>
          </p>
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
        </base-text>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="6"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />

        <base-text class="mb-5">
          <p class="text-left">
            Project 2. 
          </p>
          <div class="white text-left">
            RuneSkype<br />
            <a href="https://runeskype.herokuapp.com/play" target="_blank">https://runeskype.herokuapp.com/play</a>
          </div>
          <p class="text-left">
            Front-end design, Linting, cleaning up frontend and backend code and making sure both sides work together.
          </p>
          <p class="text-left">
            <ul>
              <li>
                RuneSkype is the newest way for friends to interact while playing your favorite Role Playing Game (RPG) RuneSkype. Playing RuneSkype is easy, just download a copy from our homepage or our repo:
              </li>	
            </ul>
          </p>
          <p 
            class="text-left"
          >
          <ul>
            <li>
              Responsibilities: Wrote clean, presentable code. Kept group on time and on track to present at Project Demo Day.
            </li>
            <li>
              Technologies used: ReactJS, Node, Express, Firebase, Twilio, jQuery
            </li>	
          </ul>
          </p>
        </base-text>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="6"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />
        <base-text class="mb-5">
          <p class="text-left">
            Project 3. 
          </p>
          <p class="text-left font-weight-black">
            The GOAT Voter App <br />  
          </p>
          <div class="white text-left">
                <a href="http://www.goatvoter.org/" target="_blank">https://http://www.goatvoter.org/</a> 
          </div>
          <p class="text-left">
            Front-End Design, created the color scheme and front-end components.
          </p>
          <p class="text-left">
            <ul>
              <li>The GOAT Voter App is a one-stop platform where voters can access information about candidates running for political offices anywhere in the United States. The GOAT Voter App streamlines information and increases voter participation.</li>
            </ul>
          </p>
          <p class="text-left">
            <ul>
              <li>
                By entering their zip code in a search field, users will be able to search and access detailed information about all candidates running for election in their district. In addition, users can enter their address to find out where their nearest polling site is located and request transportation on election day.
              </li>
              <li>
                Technologies used: JavaScript, Handlebars, Bootstrap, CSS Parallax, Node.js, Express, Sequelize, Google Civic Information API, Heroku
              </li>
            </ul>	
          </p>
        </base-text>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="6"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="6"
      >
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
    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="6"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />
        <base-text class="mb-5">
          <p class="text-left">
            Project 4. 
          </p>
          <p class="text-left font-weight-black">
            Beer Near Here <br />  
          </p>
          <div class="white text-left">
                <a href="http://www.goatvoter.org/" target="_blank">https://sulai3030.github.io/test-BeerNearHere/</a> 
          </div>
          <p class="text-left">
            Back-End Design
          </p>
          <p class="text-left">
            <ul>
              <li>Beer Near Here is an app that services beer drinkers in and around the New York and New Jersey areas using user generated information via questionnaire about beer preferences returning locations that serve craft beers.</li>
            </ul>
          </p>
          <p class="text-left">
            <ul>
              <li>
                By entering their zip code in a search field, users will be able to search and access detailed information about all candidates running for election in their district. In addition, users can enter their address to find out where their nearest polling site is located and request transportation on election day.
              </li>
              <li>
                Technologies used: HTML5, CSS, and JavaScript, Body-parser, Express, Bootstrap, CSS Parallax, GitHub Pages
              </li>
            </ul>	
          </p>
        </base-text>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="6"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="6"
      >
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
#recent-projects{
  width: 2900px;
}
.a{
  color: #000;
}

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
