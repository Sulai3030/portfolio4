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
        class="text-left"
        cols="10"
      >
        <h1 class="display-1 font-weight-thin mb-4" />
        
        <p>
          <base-text>
            Ambitious, user-focused Full Stack Web Developer recently graduated from Columbia University Coding Boot Camp with experience working in teams. Possesses project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of a new healthcare plan for the disabled distributed in the state of New York. Sulai is flexible and a quick learner. Sulai is adaptable, communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, ReactJs and VueJs.
          </base-text>
        </p>
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
