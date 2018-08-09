<template>
    <v-container grid-list-xl>
        <v-layout row wrap align-center justify-center>
            <v-flex xs12 lg8 xl8 column>
                <v-card flat>
                    <h1 class="display-3 font-weight-thin">Nosotros</h1>
                    <p xs12 lg6 xl6>{{ text }}</p>
                    <v-tabs centered icons-and-text class="landing__info__tab">
                        <v-tabs-slider color="primary"></v-tabs-slider>
                        <v-tab href="#tab-1">
                            Acerca de Nosotros
                            <v-icon>phone</v-icon>
                        </v-tab>
                        <v-tab href="#tab-2">
                            Nuestra Mision
                            <v-icon>favorite</v-icon>
                        </v-tab>
                        <v-tab href="#tab-3">
                            Nuestros Servicios
                            <v-icon>account_box</v-icon>
                        </v-tab>
                        <v-tab-item v-for="item in info" :id="'tab-' + item.id" :key="item.id">
                            <v-layout row wrap align-center justify-center>
                                <v-flex xs12 sm6 lg6 xl6 column>
                                    {{ text }}
                                </v-flex>
                                                                <v-flex xs12 sm12 lg6 xl6 column>
                                    <v-card flat>
                                        <v-card-media height="460px">
                                            <img :src="item.img" alt="mission">
                                        </v-card-media>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  data: () => ({
    info: [{
      id: 1,
      img: require('@/assets/about/services.svg'),
      title: 'Atentos y Serviciales',
      text: 'a'
    },
    {
      id: 2,
      img: require('@/assets/about/mission.svg'),
      title: 'Atentos y Serviciales',
      text: 'a'
    },
    {
      id: 3,
      img: require('@/assets/about/services.svg'),
      title: 'Atentos y Serviciales',
      text: 'a'
    }],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  })
}
</script>

<style>

</style>
