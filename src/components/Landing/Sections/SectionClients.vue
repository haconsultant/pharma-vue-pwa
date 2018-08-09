<template>
    <v-container grid-list-xl>
        <v-layout row wrap align-center justify-center>
            <v-flex xs12 lg8 xl8 column>
                <v-card flat>
                    <h1 class="display-3 font-weight-thin">Nuestros Clientes</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum et ducimus. Nihil culpa tempore labore maiores officia quisquam non, atque alias, repellendus sint fugit velit porro suscipit, a quasi.</p>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap align-center justify-center>
            <v-flex v-for="client in clients" :key="`4${client}`" xs12 sm12 lg4 xl4>
                <v-card flat>
                    <v-card-media height="300px"><img :src="client.img" alt="" srcset=""></v-card-media>
                    <v-card-title primary-title>
                            <h3 class="mb-0 hero__title font-weight-thin">{{ client.title }}</h3>
                    </v-card-title>
                    <v-card-text class="px-0">{{ client.text }}</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    clients: [{
      img: require('@/assets/citicen.svg'),
      title: 'Ciudadanos',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia vero voluptatibus, repellat dignissimos eligendi placeat cupiditate expedita reiciendis molestiae sit suscipit velit maxime quasi est praesentium? Iste ipsum voluptatem provident.'
    },
    {
      img: require('@/assets/doctor.svg'),
      title: 'Medicos',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia vero voluptatibus, repellat dignissimos eligendi placeat cupiditate expedita reiciendis molestiae sit suscipit velit maxime quasi est praesentium? Iste ipsum voluptatem provident.'
    }, {
      img: require('@/assets/pharmacy.svg'),
      title: 'Farmacias',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia vero voluptatibus, repellat dignissimos eligendi placeat cupiditate expedita reiciendis molestiae sit suscipit velit maxime quasi est praesentium? Iste ipsum voluptatem provident.'
    }]
  })
}
</script>

<style>
.hero__title {
    width: 100%;
    text-align: center;
    font-size: 3.5rem;
    color: #4c5a65;
}
</style>
