<template>
    <div class="main__container">
            <v-tabs centered icons-and-text grow>
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-app-user-access-login-form">
            Busquedad
        </v-tab>
        <v-tab href="#tab-app-user-blog">
            Blog
        </v-tab>
        <v-tab-item id="tab-app-user-blogs">
        </v-tab-item>
        <v-tab-item id="tab-app-user-blog">
            <user-blog/>
        </v-tab-item>
    </v-tabs>

    </div>
</template>
<script>
import { fetchPosts, fetchPostsComments } from '@/api/posts'
import UserBlog from './UserBlog'
export default {
  components: { UserBlog },
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
