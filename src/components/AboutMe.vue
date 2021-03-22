<template>
  <v-app>
    <v-app-bar />
    <v-main>
      <section
        id="about"
        class="overflow-hidden"
      >
        <v-card
          max-width="400"
          class="mx-auto"
        >
          <v-system-bar
            color="pink darken-2"
            dark
          >
            <v-spacer />

            <v-icon>mdi-window-minimize</v-icon>

            <v-icon>mdi-window-maximize</v-icon>

            <v-icon>mdi-close</v-icon>
          </v-system-bar>

          <v-app-bar
            dark
            color="#5124D6"
          >
            <v-toolbar-title>About Me</v-toolbar-title>

            <v-spacer />

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-app-bar>

          <v-container>
            <v-row dense>
              <v-col cols="12">
                <v-card
                  color="#D66024"
                  dark
                >
                  <v-card-title class="headline" />

                  <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

                  <v-card-actions>
                    <v-btn text />
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col
                v-for="(item, i) in items"
                :key="i"
                cols="12"
              >
                <v-card
                  :color="item.color"
                  dark
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline"
                        v-text="item.title"
                      />

                      <v-card-subtitle v-text="item.artist" />

                      <v-card-actions />
                    </div>
                    <v-avatar
                      class="ma-3"
                      size="125"
                      tile
                    >
                      <v-img :src="item.src" />
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
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
