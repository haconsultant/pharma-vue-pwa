<template>
    <v-app>
        <v-toolbar dense flat class="lading__navbar_info">
            <v-toolbar-items class="info__contact">
                <v-icon>phone</v-icon>
                <label>(+58) 425 555-5555</label>
                <v-icon>email</v-icon>
                <label>info@pharma.com</label>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
                    <v-icon size="24px" class="social">{{ icon }}</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-toolbar dense flat class="lading__navbar">
            <v-toolbar-title><img src="./assets/logotipo.svg" alt="logo" width="220px"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat @click="goHome()">Inicio</v-btn>
                <v-btn flat>Nosotros</v-btn>
                <v-btn flat>Clientes</v-btn>
                <v-btn flat>Servicios</v-btn>
                <v-btn flat @click="userAccess()">Acceso</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <v-slide-y-transition mode="out-in">
                <router-view/>
            </v-slide-y-transition>
        </v-content>
        <v-slide-y-transition mode="out-in">
            <app-footer/>
        </v-slide-y-transition>
    </v-app>
</template>
<script>
import AppFooter from './components/App/AppFooter'
export default {
  components: { AppFooter },
  data: () => ({
    modal: false,
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ],
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ]
  }),
  computed: {
    Logged () {
      return this.$store.state.user.logged
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    userAccess () {
      this.$router.push('/user/access')
    }
  },
  name: 'App'
}
</script>
<style>
html {
    overflow: auto;
}
.lading__navbar .v-toolbar__content {
    padding: 4.5rem 3rem;
}
.lading__navbar_info .v-toolbar__content {
    -webkit-box-shadow: inset 0px -1px 0px 0px rgba(173,173,173,0.96);
-moz-box-shadow: inset 0px -1px 0px 0px rgba(173,173,173,0.96);
box-shadow: inset 0px -1px 0px 0px rgba(173,173,173,0.96);
}
.info__contact > i {
    color: #0087ef!important;
}
.info__contact > label {
    align-self: center;
    padding: 0 16px 0 5px;
}
.social {
    color: #0087ef!important;
}
</style>

