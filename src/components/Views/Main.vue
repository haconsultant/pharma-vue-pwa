<template>
<div class="main__container">
    <v-container grid-list-xl>
        <v-layout row wrap align-center justify-center>
            <v-flex xs12 md10 lg10 xl10 column>
                <v-layout>
                    <v-flex lg3 xl3>
                        <div sticky-container class="sticky__container">
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
                        <div sticky-container class="sticky__container">
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
</div>
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
    }],
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
