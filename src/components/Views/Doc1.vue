<template>
<v-container fluid grid-list-md>
        <h1>Child-1</h1>
  <v-layout row wrap>
      <v-flex d-flex xs12 sm1 md1 lg2 xl2>
      </v-flex>
            <v-flex d-flex xs12 sm1 md1 lg8 xl8>
        <section-google-map/>
      </v-flex>
            <v-flex d-flex xs12 sm1 md1 lg2 xl2>
      </v-flex>
  </v-layout>
</v-container>
</template>
<script>
import SectionGoogleMap from './Utils/SectionGoogleMap'
export default {
  components: { SectionGoogleMap }

}
</script>

<style>

</style>
