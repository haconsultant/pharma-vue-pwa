<template>
    <v-footer height="auto" class="app__footer">
        <v-container grid-list-xl>
            <v-layout row wrap align-center justify-center>
                <v-flex xs12 lg8 xl8 column>
                    <v-card flat tile class="app__footer lighten-1 white--text text-xs-center">
                        <v-card-text>
                            <v-btn v-for="icon in footerIcons" :key="icon" class="mx-3 white--text" icon>
                                <v-icon size="24px">{{ icon }}</v-icon>
                            </v-btn>
                        </v-card-text>
                        <v-card-text class="white--text pt-0">
                            <v-layout row wrap align-center justify-center>
                                <v-flex xs12 lg6 xl6>
                                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </v-flex>
                                <v-flex xs12 lg6 xl6>
                                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="white--text">
                            &copy;2018 — <strong>Newtoms - LLC</strong>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-footer>
</template>

<script>
  export default {
    data: () => ({
      footerIcons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
  }
</script>

<style>
.app__footer {
  background: #03a9f4!important;
}
</style>
