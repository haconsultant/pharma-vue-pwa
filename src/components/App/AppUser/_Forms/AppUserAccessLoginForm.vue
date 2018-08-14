<template>
    <v-container grid-list-xl>
        <v-layout row wrap justify-center>
            <v-flex xs12 sm12 lg10 xl10 column>
                <v-layout>
                    <v-flex class="hidden-xs-only" sm6 lg6 xl6>
                        <h1>Acceso</h1>
                    </v-flex>
                    <v-flex xs12 lg6 xl6>
                        <v-card flat>
                            <v-form class="pa-5" ref="form" v-model="valid" lazy-validation>
                                <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Usuario o Correo Electronico" required></v-text-field>
                                <v-text-field v-model="email" :rules="emailRules" label="Contraseña" required></v-text-field>
                                <v-checkbox v-model="checkbox" label="Recordar" required></v-checkbox>
                                <v-btn @click="submit()">
                                    Acceder
                                </v-btn>
                            </v-form>
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
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    checkbox: false
  }),

  methods: {
    submit () {
      this.$router.push('/main')
    }
  }
}
</script>

<style>

</style>
