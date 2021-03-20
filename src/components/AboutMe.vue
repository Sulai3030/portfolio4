<template>
  <v-app>
    <v-app-bar />
    <v-main>
      <section
        id="about"
        class="overflow-hidden"
      >
        <v-row
          class="white"
          no-gutters
        >
          <v-col
            class="pa-5"
            cols="12"
            md="6"        
          >
            <base-bubble-1 style="transform: translate(5%, -5%)" />

            <base-heading class="info--text">
              About Me
            </base-heading>

            <base-text class="mb-2">
              Ambitious, user-focused Web and Software Developer with experience
              working in teams and independently. 
              <br>Has strong project management
              experience and experience delegating responsibilities to a team from
              time at Maximus where he spearheaded project to create the audio and ADA
              compliant portion of a new healthcare plan for 1.5 million citizens of
              New York State. 
            </base-text>
            <v-divider />
      
            <base-subheading class="info--text">
              Skills
            </base-subheading>

            <base-text class="mb-5">
              Languages: JavaScript, Python, CSS, HTML5
            </base-text>
            <v-alert
              outlined
              color="info"
            >
              <v-row
                v-for="(skill, i) in skills"
                :key="i"
                style="color: #69A1BB;"
              >
                <v-col
                  class="text-uppercase"
                  cols="6"
                  v-text="skill.name"
                />

                <v-col
                  class="text-right"
                  cols="6"
                  v-text="`${skill.value}%`"
                />

                <v-progress-linear
                  :value="skill.value"
                  color="info"
                  height="8"
                />
              </v-row>
            </v-alert>
          </v-col>

          <v-col
            class="hidden-sm-and-down"
            md="6"
          >
            <v-img
              :src="require('@/assets/aboutme.png')"
              height="100%"
            />
          </v-col>
        </v-row>
      </section>
    </v-main>
  </v-app> 
</template>

<script>
  export default {
    data: () => ({
      model: null,
      classes: [
        ['h1', 'Heading 1', '6rem', '300', '-.015625em', -1],
        ['h2', 'Heading 2', '3.75rem', '300', '-.0083333333em', 0],
        ['h3', 'Heading 3', '3rem', '400', 'normal', 1],
        ['h4', 'Heading 4', '2.125rem', '400', '.0073529412em', 2],
        ['h5', 'Heading 5', '1.5rem', '400', 'normal', 2],
        ['h6', 'Heading 6', '1.25rem', '500', '.0125em', 3],
        ['subtitle-1', 'Subtitle 1', '1rem', '400', '.009375em', 4],
        ['subtitle-2', 'Subtitle 2', '0.875rem', '500', '.0071428571em', 4],
        ['body-1', 'Body 1', '1rem', '400', '.03125em', 4],
        ['body-2', 'Body 2', '0.875rem', '400', '.0178571429em', 4],
        ['button', 'Button', '0.875rem', '500', '.0892857143em', 4],
        ['caption', 'Caption', '0.75rem', '400', '.0333333333em', 4],
        ['overline', 'Overline', '0.75rem', '500', '.1666666667em', 4],
      ],
    }),
  }
</script>
