<template>
  <section
    id="services"
    class="overflow-hidden"
  >
    <v-row
      class="accent"
      no-gutters
    >
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/services.png')"
          height="100%"
        />
      </v-col>

      <v-col
        class="text-center pa-5"
        cols="12"
        md="6"
      >
        <v-row
          class="fill-height"
          align="left"
          justify="left"
        >
          <v-col cols="12">
            <base-bubble-2
              style="transform: translateX(55%)"
            />
            <base-heading class="info--text">
              Clients
            </base-heading>

            <base-text class="mb-5">
              <p class="text-left">BlackHealthMatters.com <a href="https://blackhealthmatters.com/" target="_blank">(https://blackhealthmatters.com)</a>     New York, NY 
                <ul>            
                  <li>Write Health Articles targeted to an African American audience					2019 - Present</li>	
                <li>
                  <a href="https://blackhealthmatters.com/lauren-lee-talks-kidney-disease-breakthroughs/" target="_blank">https://blackhealthmatters.com/lauren-lee-talks-kidney-disease-breakthroughs/</a>
                </li>	
                <li>
                  <a href="https://blackhealthmatters.com/working-with-your-doctor-when-you-have-kidney-disease-empowering-yourself-to-be-an-advocate-for-you/" target="_blank">https://blackhealthmatters.com/working-with-your-doctor-when-you-have-kidney-disease-empowering-yourself-to-be-an-advocate-for-you/</a></li>
                </ul>
              </p>

            </base-text>
            <base-text class="mb-5">
              <p class="text-left">Examiner.com <a href="https://blackhealthmatters.com/" target="_blank"></a>        New York, NY 
                <ul>            
                  <li>New York City Budget Meals Examiner </li>	
                <li>
                  Wrote, cooked and tested new recipes for Examiner.com
                </li>	
                <li>
                  Regularly manage social media platforms to advertise web content</li>
                </ul>
              </p>
            </base-text>
            <base-text class="mb-5">
              <p class="text-left">City of New York Campaign Finance Board     New York, NY
                Website Copywriter/Assistant to Director of Communications                                                                                        
                <a href="http://www.nyccfb.info/" target="_blank">http://www.nyccfb.info/</a>     New York, NY 
                <ul>            
                  <li>Revamped website. </li>	
                <li>
                  Rewrote and proofread 30 + pages editorial copy in a Drupal-based CMS. 
                </li>	
                <li>
                  Collaborated with the Communications Department staff to maintain and update public website 
                  prior to re-launch. Ensured coherency of portal’s copy.
                  </li>
                </ul>
              </p>

            </base-text>
          </v-col>
          
          <v-col
            v-for="(service, i) in services"
            :key="i"
            class="text-center mb-3"
            md="6"
          >
            

            <base-text>
              <div
                class="mb-2"
                v-text="service.name"
              />
              <div v-html="service.blurb" />
            </base-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'Services',

    data: () => ({
      services: [
        {
          name: 'Research',
          icon: 'mdi-clipboard-text-outline',
          blurb: 'Curabitur et nisi semper,<br> pellent e sque ',
        },
        {
          name: 'Design',
          icon: 'mdi-pencil-outline',
          blurb: 'Curabitur et nisi semper, <br>pellent.',
        },
        {
          name: 'Development',
          icon: 'mdi-settings-outline',
          blurb: 'Curabitur et nisi semper, <br>pellent.',
        },
        {
          name: 'Support',
          icon: 'mdi-account',
          blurb: 'Curabitur et nisi semper, <br>pellent.',
        },
      ],
    }),
  }
</script>
