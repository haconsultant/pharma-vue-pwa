<template>
    <v-container grid-list-xl>
        <v-layout row wrap align-center justify-center>
            <v-flex xs12 md12 lg12 xl12 column>
                <v-layout>
                    <v-flex lg3 xl3>
                        <div sticky-container class="sticky__container hidden-md-and-down">
                            <div class="pt-3" v-sticky sticky-offset="offset" sticky-side="top">
                                <v-avatar :tile="tile" :size="256" color="grey lighten-4" class="">
                                    <img :src="imageSoruce" alt="avatar">
                                </v-avatar>
                                <v-card class="pa-2 ma-3">
                                    <v-card-title>
                                        <h3 class="headline mb-0">Usuario</h3>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-list>
                                            <v-list-group v-for="item in items" v-model="item.active" :key="item.title" :prepend-icon="item.action" no-action>
                                                <v-list-tile slot="activator">
                                                    <v-list-tile-content>
                                                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                                    </v-list-tile-content>
                                                </v-list-tile>

                                                <v-list-tile v-for="subItem in item.items" :key="subItem.title">
                                                    <v-list-tile-content>
                                                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                                                    </v-list-tile-content>

                                                    <v-list-tile-action>
                                                        <v-icon>{{ subItem.action }}</v-icon>
                                                    </v-list-tile-action>
                                                </v-list-tile>
                                            </v-list-group>
                                        </v-list>
                                    </v-card-text>
                                </v-card>
                                <v-card class="pa-2 ma-3">
                                    <v-card-title>
                                        <h3 class="headline mb-0">Grupos</h3>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-list>
                                            <v-list-group v-for="item in items" v-model="item.active" :key="item.title" :prepend-icon="item.action" no-action>
                                                <v-list-tile slot="activator">
                                                    <v-list-tile-content>
                                                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                                    </v-list-tile-content>
                                                </v-list-tile>

                                                <v-list-tile v-for="subItem in item.items" :key="subItem.title">
                                                    <v-list-tile-content>
                                                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                                                    </v-list-tile-content>

                                                    <v-list-tile-action>
                                                        <v-icon>{{ subItem.action }}</v-icon>
                                                    </v-list-tile-action>
                                                </v-list-tile>
                                            </v-list-group>
                                        </v-list>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </div>
                    </v-flex>
                    <v-flex xs12 lg7 xl7>
                        <v-card class="pa-2 ma-3" v-for="post in posts" :key="`post-${post.id}`">
                            <v-card-media src="https://placeimg.com/640/480/tech/grayscale" height="200px"></v-card-media>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{ post.user}}</h3>
                                </div>
                            </v-card-title>
                            <v-card-text>
                                <h2>{{ post.title }}</h2> {{ post.body }}
                            </v-card-text>
                            <v-card-actions>
                                <v-btn flat>Compartir</v-btn>
                                <v-btn flat color="purple">Explore</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn label="post.show" icon @click="show(post)">
                                    <v-icon>{{ post.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-card-actions>
                            <v-slide-y-transition>
                                <v-card-text v-show="post.show">
                                    <v-list two-line>
                                        <template v-for="(comment, index) in post.comments">
                                            <v-subheader v-if="comment.header" :key="comment.id">
                                                {{ comment.header }}
                                            </v-subheader>
                                            <v-divider v-else-if="comment.divider" :inset="comment.inset" :key="index"></v-divider>
                                            <v-list-tile v-else :key="comment.email" avatar>
                                                <v-list-tile-avatar>
                                                    <img :src="imageSoruce">
                                                </v-list-tile-avatar>
                                                <v-list-tile-content>
                                                    <v-list-tile-title v-html="comment.name"></v-list-tile-title>
                                                    <v-list-tile-sub-title v-html="comment.body"></v-list-tile-sub-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                        </template>
                                    </v-list>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                    </v-flex>
                    <v-flex lg3 xl3>
                        <div sticky-container class="sticky__container hidden-md-and-down">
                            <div class="pt-3" v-sticky sticky-offset="offset" sticky-side="top">
                                <v-card class="flex__column">
                                    <v-btn flat>A</v-btn>
                                    <v-btn flat>A</v-btn>
                                    <v-btn flat>A</v-btn>
                                    <v-btn flat>A</v-btn>
                                    <v-btn flat>A</v-btn>
                                </v-card>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
                <router-view/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { fetchPosts, fetchPostsComments } from '@/api/posts'
export default {
  data: () => ({
    // show: false,
    isFetched: true,
    tile: false,
    imageSoruce: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
    posts: [],
    items: [
      {
        action: 'local_activity',
        title: 'Attractions',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'restaurant',
        title: 'Dining',
        active: true,
        items: [
          { title: 'Breakfast & brunch' },
          { title: 'New American' },
          { title: 'Sushi' }
        ]
      },
      {
        action: 'school',
        title: 'Education',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'directions_run',
        title: 'Family',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'healing',
        title: 'Health',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'content_cut',
        title: 'Office',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'local_offer',
        title: 'Promotions',
        items: [
          { title: 'List Item' }
        ]
      }
    ]
  }),
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  created () {
    this.fetchPostsData()
  },
  methods: {
    fetchPostsData () {
      fetchPosts().then(response => {
        response.data.map((element, index) => {
          element.show = false
          this.posts.push(element)
        })
        console.log(this.posts)
      })
    },
    show (data) {
      this.posts.forEach(element => {
        if (element.id === data.id) {
          fetchPostsComments(data.id).then(response => {
            element.comments = response.data
          }).then(() => {
            console.log(element)
            element.show = !element.show
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.flex__column {
  display: flex;
  flex-flow: column;
}
.v-avatar {
  display: inline-flex!important;
}
.sticky__container {
  height: 100%;
}
</style>
