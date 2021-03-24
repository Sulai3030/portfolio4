<template>
  <section
    id="services"
    class="overflow-hidden"
  >
    <v-row
      align="center"
      justify="center"
      class="accent"
      no-gutters
    >
      <v-col
        class="text-center pa-5"
        cols="12"
        md="6"
      >
        <v-row
          class="fill-height"
          align="center" 
          justify="center"
          no-gutters
        >
          <v-col cols="12">
            <base-bubble-2
              style="transform: translateX(55%)"
            />
            <v-card-title />
            <v-sheet
              color="#F7C72A"
              elevation="2"
              height="100"
              outlined
              rounded
              shaped
              width=""
            >
              <h1>Clients</h1>
            </v-sheet>
            <v-card
              max-width="400"
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
                <v-toolbar-title>BlackHealthMatters.com</v-toolbar-title>

                <v-spacer />

                <v-btn icon>
                  <v-icon />
                </v-btn>
              </v-app-bar>
              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-card
                      color="#385F73"
                      dark
                    >
                      <v-card-title class="headline" />
                      <ul>            
                        <p class="text-left" /><li>Write Health Articles targeted to an African American audience					2019 - Present</li>	
                        <li>
                          <a
                            href="https://blackhealthmatters.com/lauren-lee-talks-kidney-disease-breakthroughs/"
                            target="_blank"
                          >https://blackhealthmatters.com/lauren-lee-talks-kidney-disease-breakthroughs/</a>
                        </li>	
                        <li>
                          <a
                            href="https://blackhealthmatters.com/working-with-your-doctor-when-you-have-kidney-disease-empowering-yourself-to-be-an-advocate-for-you/"
                            target="_blank"
                          >https://blackhealthmatters.com/working-with-your-doctor-when-you-have-kidney-disease-empowering-yourself-to-be-an-advocate-for-you/</a>
                        </li>
                      </ul>
                      <v-card-actions>
                        <v-btn text />
                      </v-card-actions>
                    </v-card>
                  </v-col>

                  <v-col>
                    <v-card-title
                      class="headline"
                      v-text="item.title"
                    />

                    <v-card-subtitle v-text="item.artist" />

                    <v-card-actions>
                      <v-btn
                        v-if="item.artist === 'Ellie Goulding'"
                        class="ml-2 mt-3"
                        fab
                        icon
                        height="40px"
                        right
                        width="40px"
                      >
                        <v-icon />
                      </v-btn>
                      <v-btn
                        v-else
                        class="ml-2 mt-5"
                        outlined
                        rounded
                        small
                      />
                    </v-card-actions>
                    
                    <v-avatar
                      class="ma-3"
                      size="125"
                      tile
                    >
                      <v-img :src="item.src" />
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    
    <v-card
      max-width="400"
      class="mx-auto"
    >
      <v-system-bar
        color="pink darken-2"
        dark
      >
        <v-spacer />

        <v-icon />

        <v-icon />

        <v-icon />
      </v-system-bar>

      <v-app-bar
        dark
        color="pink"
      >
        <v-toolbar-title>City of New York Campaign Finance Board New York, NY Website Copywriter/Assistant to Director of Communications http://www.nyccfb.info/ New York, NY</v-toolbar-title>

        <v-spacer />

        <v-btn icon>
          <v-icon />
        </v-btn>
      </v-app-bar>

      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-card
              color="#385F73"
              dark
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Assisted in relaunching website prior to election</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
                
        <v-row dense>
          <v-col cols="12">
            <v-card
              color="#385F73"
              dark
            >
              <v-list-item>
                <p class="text-sm-left">
                  Rewrote and proofread 30 + pages editorial copy in a Drupal-based CMS
                </p>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card
              color="#385F73"
              dark
            >
              <v-list-item>
                <v-list-item-content>
                  <p class="text-sm-left">
                    Collaborated with the Communications Department staff to maintain and update public website prior to re-launch. Ensured coherency of portal’s copy
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
            
    <v-card
      max-width="400"
      class="mx-auto"
    >
      <v-system-bar
        color="pink darken-2"
        dark
      >
        <v-spacer />

        <v-icon />

        <v-icon />

        <v-icon />
      </v-system-bar>

      <v-app-bar
        dark
        color="pink"
      >
        <v-toolbar-title>
          <p class="text-sm-left">
            The Princeton Review.com
          </p>
        </v-toolbar-title>

        <v-spacer />

        <v-btn icon>
          <v-icon />
        </v-btn>
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
                <v-list-item>
                  <v-list-item-content>
                    <p class="text-left">
                      Website Copywriter                                                                                      
                      <a
                        href="http://theprincetonreview.com/"
                        target="_blank"
                      >http://www.princetonreview.com/</a>     New York, NY 
                      <ul>            
                        <li>
                          Proofread and rewrote (15-20) articles and promotional copy to adhere to SEO best practices which
                          resulted in increased readership
                        </li>	
                        <li>
                          Performed Quality Assurance on the company's web pages to improve readability and page rank in Google
                          searches: FAQs: The Best 169 Law Schools: 2015 Edition”; “Strategies to Succeed in Law School”;
                          “Strategies for Second–Time Applicants”
                        </li>	
                      </ul>
                    </p>
                  </v-list-item-content>
                </v-list-item>
              </v-card-subtitle>
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
                  color="pink"
                >
                  <v-toolbar-title>Pearson Education Group </v-toolbar-title>

                  <v-spacer />

                  <v-btn icon />
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
                          <p class="text-left">
                            Textbook Writer
                          </p>
                          <p class="text-left">
                            Assisted Executive Editor for English Composition and Literature by researching, proofing and writing supplemental materials for an ‘Introduction Level English Textbook’ aimed at state college market and which specifically targeted non-English majors wanting to develop the AP grammar style.
                          </p>
                          <p class="text-left">
                            Edited and proofread educational materials to ensure accuracy and consistency of information. Designed and formulated writing exercises and study questions (20+) for each chapter in text and online versions.
                          </p>
                        </v-card-subtitle>

                        <v-card-actions>
                          <v-btn text />
                        </v-card-actions>
                      </v-card>
                    </v-col>

                    <v-col>
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
                                
                          <v-img :src="item.src" />
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
              <v-card-actions>
                <v-btn text />
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col>
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
                  <v-card-actions>
                    <v-btn
                      v-if="item.artist === 'Ellie Goulding'"
                      class="ml-2 mt-3"
                      fab
                      icon
                      height="40px"
                      right
                      width="40px"
                    >
                      <v-icon />
                    </v-btn>
                    <v-btn
                      v-else
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                    />
                  </v-card-actions>
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
    
    <v-hover />
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
        color="pink"
      >
        <v-app-bar-nav-icon />

        <v-toolbar-title>ScreenRant.com</v-toolbar-title>

        <v-spacer />

        <v-btn icon />
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
                <p class="text-left">                                                                                        
                  <a
                    href="https://screenrant.com/author/sulai/"
                    target="_blank"
                  >ScreenRant.com</a> 
                </p><p class="text-left">
                  Wrote multiple daily posts of varying length about upcoming Hollywood movies on deadline
                  <ul />
                </p>
              </v-card-subtitle>
              <v-card-actions>
                <v-btn text />
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col>
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

                  <v-card-actions>
                    <v-btn
                      v-if="item.artist === 'Ellie Goulding'"
                      class="ml-2 mt-3"
                      fab
                      icon
                      height="40px"
                      right
                      width="40px"
                    >
                      <v-icon>mdi-play</v-icon>
                    </v-btn>

                    <v-btn
                      v-else
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                    />
                  </v-card-actions>
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
    <v-hover>
      <v-card
        elevation="24"
        outlined
        shaped
        max-width="600"
        class="mx-auto"
      />
    </v-hover>
  </section>
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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto&display=swap');
.services{
  width: 2900px;
  
  }
.a{
  color: #F7C72A;
}
.v-application a{
  color: #F7C72A;
}
</style>

