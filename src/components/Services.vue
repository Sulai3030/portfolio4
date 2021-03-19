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
            <base-heading class="info--text">
              Clients
            </base-heading>
            <v-card
              elevation="24"
              outlined
              shaped
            >
            <v-hover>
            <base-text class="mb-5"
            >
              <p class="text-left text--primary">BlackHealthMatters.com <a href="https://blackhealthmatters.com/" target="_blank">https://blackhealthmatters.com</a>     New York, NY 
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
            </v-hover>
            </v-card>
            <v-hover>
            <v-card
              elevation="24"
              outlined
              shaped
            >
            <base-text class="mb-5">
              <p class="text-left font-weight-regular">Examiner.com <a href="https://blackhealthmatters.com/" target="_blank"></a>        New York, NY 
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
            </v-card>
            </v-hover>
            <v-hover>
            <v-card
              elevation="24"
              outlined
              shaped
            >
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
           </v-card>
           </v-hover>
          </v-col>
          <v-hover>
          <v-card
              elevation="24"
              outlined
              shaped
            >
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
          </v-card>
         </v-hover>
         <v-hover>
          <v-card
              elevation="24"
              outlined
              shaped
            >
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
          </v-card>
        </v-hover>
        <v-hover>
            <v-card
              elevation="24"
              outlined
              shaped
            >
              <v-card-text>
                  <base-text class="mb-5"> 
                    <p class="text- left">                                                                                        
                      <a href="https://screenrant.com/author/sulai/)/" target="_blank">ScreenRant.com</a> 
                      <p class="text-left">Textbook Writer
                      <ul>            
                        <li>Wrote multiple daily posts of varying length about upcoming Hollywood movies on deadline
                        </li>	
                      </ul>
                    </p>
                  </base-text>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<style lang="scss" scoped>
.services{
  width: 2900px;
  
  }
.a{
  color: #000;
}
</style>

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
