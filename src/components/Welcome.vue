<template>
  <section
    id="welcome"
    class="overflow-hidden"
  >
    <v-row no-gutters>      
      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="12"
        pa-5="$vuetify.breakpoint.smAndDown"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            md="6"
          >
            <base-heading>Sulai Sivadel</base-heading>
            <base-text>
              Ambitious, user-focused Full Stack Web Developer recently graduated from Columbia University Coding Boot Camp with experience working in teams. Possesses project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded a project to create the audio/ADA compliant portion of a new healthcare plan for the disabled distributed in the state of New York. Sulai is flexible and a quick learner. Sulai is adaptable, communicative, knowledgeable and steadfast with excellent computer engineering skills learned in the Columbia University Coding Bootcamp where he created projects in HTML5, CSS, JavaScript, ReactJs and VueJs.
            </base-text>
            <base-btn 
              class="mt-4" 
              @click="doSomething"
            >
              Learn More!
            </base-btn>
          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'Welcome',
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
