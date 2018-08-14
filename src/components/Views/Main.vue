<template>
    <v-container grid-list-xl>
        <v-layout row wrap align-center justify-center>
            <v-flex xs12 lg9 xl9 column>
                <v-layout>
                    <v-flex lg3 xl3>
                      <div class="fixed__container">
                        <v-avatar :tile="tile" :size="256" color="grey lighten-4" class="">
                            <img :src="imageSoruce" alt="avatar">
                        </v-avatar>
                        <v-card class="pa-2 ma-3">
a
                        </v-card>
                        <v-card class="pa-2 ma-3">
                          a
                        </v-card>
                      </div>
                    </v-flex>
                    <v-flex xs12 lg7 xl7>
                        <v-card class="pa-2 ma-3" v-for="post in posts" :key="`post-${post.id}`">
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{ post.user}}</h3>
                                </div>
                                <v-card-text>
                                    {{ post.content }}
                                </v-card-text>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex lg3 xl3>
                      <div class="fixed__container">
                        <v-card d-flex>
                          <v-btn flat>A</v-btn>
                          <v-btn flat>A</v-btn>
                          <v-btn flat>A</v-btn>
                          <v-btn flat>A</v-btn>
                          <v-btn flat>A</v-btn>
                        </v-card>
                      </div>
                    </v-flex>
                </v-layout>
                <router-view/>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  data: () => ({
    tile: false,
    imageSoruce: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    posts: [{
      id: 1,
      user: 'Farmacia',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis, cumque itaque adipisci dignissimos repellendus inventore?'
    },
    {
      id: 2,
      user: 'Farmacia',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis, cumque itaque adipisci dignissimos repellendus inventore?'
    },
    {
      id: 3,
      user: 'Farmacia',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis, cumque itaque adipisci dignissimos repellendus inventore?'
    },
    {
      id: 4,
      user: 'Farmacia',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis, cumque itaque adipisci dignissimos repellendus inventore?'
    },
    {
      id: 5,
      user: 'Farmacia',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis, cumque itaque adipisci dignissimos repellendus inventore?'
    },
    {
      id: 6,
      user: 'Farmacia',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis, cumque itaque adipisci dignissimos repellendus inventore?'
    },
    {
      id: 7,
      user: 'Farmacia',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis, cumque itaque adipisci dignissimos repellendus inventore?'
    },
    {
      id: 8,
      user: 'Farmacia',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis, cumque itaque adipisci dignissimos repellendus inventore?'
    },
    {
      id: 9,
      user: 'Farmacia',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis, cumque itaque adipisci dignissimos repellendus inventore?'
    },
    {
      id: 10,
      user: 'Farmacia',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis, cumque itaque adipisci dignissimos repellendus inventore?'
    }]
  }),
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>
.fixed__container {
  position: fixed;
}
</style>
