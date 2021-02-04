<template>
  <section
    id="services"
    class="overflow-hidden"
  >
    <v-row
      class="accent"
      no-gutters
    >
      
        <v-img
          :src="require('@/assets/services.png')"
          height="100%"
        />
     

    
        <v-row
          class="fill-height"
          align="left"
          justify="left"
          padding="e"
        >
          <v-col cols="12">
            <base-bubble-2
              style="transform: translateX(55%)"
            />
            <base-heading class="info--text">
              Clients
            </base-heading>

            <base-text class="mb-5">
              <p class="text-left">BlackHealthMatters.com <a href="https://blackhealthmatters.com/" target="_blank">https://blackhealthmatters.com</a>     New York, NY 
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
                  <li>New York City Budget Meals Examiner     2007-2017</li>	
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
          <base-text class="mb-5">
              <p class="text-left">The Princeton Review.com                                                                                                                                                               New York, NY
                <p class="text-left">Website Copywriter                                                                                      
                <a href="http://theprincetonreview.com/" target="_blank">http://www.princetonreview.com/</a>     New York, NY 
                <ul>            
                  <li>Proofread and rewrote (15-20) articles and promotional copy to adhere to SEO best practices which
                  resulted in increased readership
                  </li>	
                <li>
                    Performed Quality Assurance on the company's web pages to improve readability and page rank in Google
                    searches: FAQs: The Best 169 Law Schools: 2015 Edition”; “Strategies to Succeed in Law School”;
                    “Strategies for Second–Time Applicants”
                </li>	
                </ul>
              </p>
            </base-text>
            <base-text class="mb-5">
              <p class="text-left">Pearson Education Group   New York, NY </p>                                                                                
                <a href="http://www.nyccfb.info/" target="_blank">http://www.nyccfb.info/</a>     New York, NY 
                <p class="text-left">Textbook Writer
                <ul>    
                  <li>Assisted Executive Editor for English Composition and Literature by researching, proofing and writing
                      supplemental materials for an ‘Introduction Level English Textbook’ aimed at state college market and which 
                      specifically targeted non-English majors wanting to develop the AP grammar style. 
                  </li>	
                  <li>
                    Edited and proofread educational materials to ensure accuracy and consistency of information. Designed 
                    and formulated writing exercises and study questions (20+) for each chapter in text and online versions.
                  </li>	
                </ul>
              </p>
            </base-text>
             <base-text class="mb-5"> 
               <p class="text-left">                                                                                        
                <a href="https://screenrant.com/author/sulai/)/" target="_blank">ScreenRant.com</a> 
                <p class="text-left">Writer
                <ul>            
                  <li>Wrote multiple daily posts of varying length about upcoming Hollywood movies on deadline </li>	
                </ul>
              </p>
            </base-text>
        </v-row>
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
