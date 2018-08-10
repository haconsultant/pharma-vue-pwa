<template>
    <v-container grid-list-xl>
        <v-layout row wrap align-center justify-center>
            <v-flex xs12 lg8 xl8 column>
                <v-card flat>
                    <h1 class="display-3 font-weight-thin">Servicios</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum et ducimus. Nihil culpa tempore labore maiores officia quisquam non, atque alias, repellendus sint fugit velit porro suscipit, a quasi.</p>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap align-center justify-center>
      <v-flex v-for="i in 2" :key="`4${i}`" xs12 sm6 lg6 xl6>
        <v-card>
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
            <v-flex v-for="i in 2" :key="`4${i}`" xs12 sm6 lg6 xl6>
        <v-card>
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
