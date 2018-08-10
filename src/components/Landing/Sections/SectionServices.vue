<template>
    <v-container grid-list-xl>
        <v-layout row wrap align-center justify-center>
            <v-flex xs12 lg8 xl8 column>
                <v-card flat>
                    <h1 class="display-3 font-weight-thin">Servicios</h1>
                    <p xs12 lg6 xl6 class="hero__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum et ducimus. Nihil culpa tempore labore maiores officia quisquam non, atque alias, repellendus sint fugit velit porro suscipit, a quasi.</p>
                </v-card>
                <v-layout row wrap align-center justify-center>
                    <v-flex v-for="i in servicesCiticen" :key="`4${i.id}`" xs12 sm6 lg4 xl4>
                        <v-card flat>
                            <v-card-media height="60px"><img :src="i.img" alt="" srcset=""></v-card-media>
                            <v-card-title primary-title>
                                <h3 class="mb-0 pattner__title font-weight-thin">{{ i.title }}</h3>
                            </v-card-title>
                            <v-card-text class="px-0">
                                <p>{{ i.text }}</p>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex v-for="i in servicesMedic" :key="`4${i.id}`" xs12 sm6 lg4 xl4>
                        <v-card flat>
                            <v-card-media height="60px"><img :src="i.img" alt="" srcset=""></v-card-media>
                            <v-card-title primary-title>
                                <h3 class="mb-0 pattner__title font-weight-thin">{{ i.title }}</h3>
                            </v-card-title>
                            <v-card-text class="px-0">
                                <p>{{ i.text }}</p>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex v-for="i in servicesPharmacy" :key="`4${i.id}`" xs12 sm6 lg4 xl4>
                        <v-card flat>
                            <v-card-media height="60px"><img :src="i.img" alt="" srcset=""></v-card-media>
                            <v-card-title primary-title>
                                <h3 class="mb-0 pattner__title font-weight-thin">{{ i.title }}</h3>
                            </v-card-title>
                            <v-card-text class="px-0">
                                <p pa-0>{{ i.text }}</p>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    servicesCiticen: [{
      id: '1c',
      img: require('@/assets/citicen.svg'),
      title: 'Busquedad de Productos',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In amet optio, blanditiis nemo eveniet incidunt.'
    },
    {
      id: '2c',
      img: require('@/assets/citicen.svg'),
      title: 'Agendar Citas',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In amet optio, blanditiis nemo eveniet incidunt.'
    },
    {
      id: '3c',
      img: require('@/assets/citicen.svg'),
      title: 'Encontra Consultorios',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In amet optio, blanditiis nemo eveniet incidunt.'
    }],
    servicesMedic: [{
      id: '1m',
      img: require('@/assets/citicen.svg'),
      title: 'Registrar Consultorio',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In amet optio, blanditiis nemo eveniet incidunt.'
    },
    {
      id: '2m',
      img: require('@/assets/citicen.svg'),
      title: 'Control de Agendas',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In amet optio, blanditiis nemo eveniet incidunt.'
    },
    {
      id: '3m',
      img: require('@/assets/citicen.svg'),
      title: 'E-Recip',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In amet optio, blanditiis nemo eveniet incidunt.'
    }],
    servicesPharmacy: [{
      id: '1p',
      img: require('@/assets/citicen.svg'),
      title: 'Disponibilidad de Inventario Online',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In amet optio, blanditiis nemo eveniet incidunt.'
    },
    {
      id: '2p',
      img: require('@/assets/citicen.svg'),
      title: 'Gestion de Inventario de Farmacias y Sucursales',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In amet optio, blanditiis nemo eveniet incidunt.'
    },
    {
      id: '3p',
      img: require('@/assets/citicen.svg'),
      title: 'Visibilidad de tus Productos',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In amet optio, blanditiis nemo eveniet incidunt.'
    }]
  })
}
</script>

<style>
    .pattner__title {
        color: black;
        padding-bottom: 1rem;
        text-align: center;
        width: 100%;
    }
</style>
