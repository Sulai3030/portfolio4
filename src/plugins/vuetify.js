import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#1a2965',
        secondary: '#539E08',
        accent: '#10779E',
        info: '#689FF7',
      },
    },
  },
})
