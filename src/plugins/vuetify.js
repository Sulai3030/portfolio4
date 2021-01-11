import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3763AB',
        secondary: '#F79081',
        accent: '#8FAB3F',
        info: '#689FF7',
      },
    },
  },
})
