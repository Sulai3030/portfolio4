<template>
  <v-app>
    <v-app-bar />
    <v-main>
      <section
        id="about"
        class="overflow-hidden"
      >
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
        >
          <template #progress>
            <v-progress-linear
              color="deep-purple"
              height="10"
            />
          </template>

          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          />

          <v-card-title>About Me</v-card-title>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              Ambitious, user-focused Web and Software Developer with experience working in teams and independently.
              Has strong project management experience and experience delegating responsibilities to a team from time at Maximus where he spearheaded project to create the audio and ADA compliant portion of a new healthcare plan for 1.5 million citizens of New York State.
            </v-row>
          </v-card-text>

          <v-divider class="mx-4" />

          <v-card-title>Tonight's availability</v-card-title>

          <v-card-text />
        </v-card>
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
    items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
  }
</script>


<style lang="scss" scoped>
.main{
  margin: auto;
}

</style>
