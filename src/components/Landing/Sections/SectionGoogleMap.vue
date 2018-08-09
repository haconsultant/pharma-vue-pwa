<template>
    <v-card class="pa-3" flat height="75vh">
        <v-toolbar dense floating>
            <gmap-autocomplete @place_changed="setPlace">
            </gmap-autocomplete>
            <v-btn icon  @click="addMarker">
                <v-icon>my_location</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
        <v-card-media>
            <gmap-map :center="center" :zoom="12" style="width:100%;  height: 400px;">
                <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position"></gmap-marker>
            </gmap-map>
        </v-card-media>
    </v-card>
</template>

<script>
export default {
  name: 'SectionGoogleMap',
  data () {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    }
  },

  mounted () {
    this.geolocate()
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace (place) {
      this.currentPlace = place
    },
    addMarker () {
      console.log(this.currentPlace)
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      } else {
        this.geolocate()
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.markers.push({ position: this.center })
        this.places.push(this.currentPlace)
      })
    }
  }
}
</script>