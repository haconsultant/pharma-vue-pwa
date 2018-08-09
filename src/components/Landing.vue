<template>
    <div class="l">
                    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
        <v-container grid-list-xl>

            <!-- <v-layout row wrap align-center justify-center>
                <v-flex xs12 lg8 xl8 column>
                    <v-slide-y-transition mode="out-in">
                        <section-google-map/>
                    </v-slide-y-transition>
                </v-flex>
            </v-layout> -->
        </v-container>
        <v-flex xs12 lg12 xl12 column class="landing__section">
            <section-about/>
        </v-flex>
        <v-flex xs12 lg12 xl12 column class="landing__section">
            <section-clients></section-clients>
        </v-flex>
        <v-flex xs12 lg12 xl12 column class="landing__section">
            <v-container grid-list-xl>
                <v-layout row wrap align-center justify-center>
                    <v-flex xs12 lg8 xl8 column>
                        <v-card flat>
                            <h1 class="display-3 font-weight-thin">Servicios</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum et ducimus. Nihil culpa tempore labore maiores officia quisquam non, atque alias, repellendus sint fugit velit porro suscipit, a quasi.</p>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </div>
</template>
<script>
import SectionAbout from './Landing/Sections/SectionAbout'
import SectionClients from './Landing/Sections/SectionClients'
import SectionGoogleMap from './Landing/Sections/SectionGoogleMap'
export default {
  components: { SectionAbout, SectionClients, SectionGoogleMap },
  data: () => ({
    items: [
      {
        src: 'https://images.pexels.com/photos/1089550/pexels-photo-1089550.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
      },
      {
        src: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  })
}
</script>

<style>
.landing__section {
  background: #fff;
  min-height: 100vh;
  padding: 110px 0 30px 0;
}
.landing__section h1 {
  text-align: center;
  padding: 1rem;
}
.landing__section p {
  padding: 3rem;
  text-align: center;
  line-height: 30px;
  margin: 0 auto;
  color: #999;
}
.landing__info__tab .v-tabs__bar{
  padding-bottom: 4rem;
}
</style>
