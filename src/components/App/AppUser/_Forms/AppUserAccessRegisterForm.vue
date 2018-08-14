<template>
    <v-container grid-list-xl>
        <v-layout row wrap justify-center>
            <v-flex xs12 sm12 lg10 xl10 column>
                <v-layout>
                    <v-flex class="hidden-xs-only" sm6 lg6 xl6>
                        <img src="" alt="" srcset="">
                    </v-flex>
                    <v-flex xs12 lg6 xl6>
                        <v-stepper v-model="step" vertical>
                                <v-stepper-step :complete="step > 1" step="1">Datos Personales</v-stepper-step>
                            <v-stepper-items>
                                <v-stepper-content step="1">
                                        <v-form ref="form" v-model="valid" lazy-validation>
                                            <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Nombres" required></v-text-field>
                                            <v-text-field v-model="name" :rules="nameRules" label="Apellidos" required></v-text-field>
                                            <v-text-field v-model="name" :rules="nameRules" label="Cedula" required></v-text-field>
                                            <v-layout align-center justify-end>
                                                <v-btn large color="primary" @click="nextStep()">Siguiente</v-btn>
                                            </v-layout>
                                        </v-form>
                                </v-stepper-content>
                                <v-stepper-step :complete="step > 2" step="2">Datos del Usuario</v-stepper-step>
                                <v-stepper-content step="2">
                                    <v-form ref="form" v-model="valid" lazy-validation>
                                        <v-text-field v-model="name" :rules="nameRules" label="Correo Electronico" required></v-text-field>
                                        <v-text-field v-model="name" :rules="nameRules" label="Nombre de Usuario" required></v-text-field>
                                        <v-text-field v-model="name" :rules="nameRules" label="Contraseña" required></v-text-field>
                                        <v-text-field v-model="name" :rules="nameRules" label="Repetir Contraseña" required></v-text-field>
                                        <v-layout align-center justify-space-between>
                                            <v-btn large color="primary" @click="lastStep()">Anterior</v-btn>
                                            <v-btn large color="primary" @click="nextStep()">Siguiente</v-btn>
                                        </v-layout>
                                    </v-form>
                                </v-stepper-content>
                            </v-stepper-items>
                        </v-stepper>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    step: 0,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Usuario o Correo Electronico son requeridos',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {

      }
    },
    clear () {
      this.$refs.form.reset()
    },
    nextStep () {
      if (this.step <= 4) {
        this.step++
      }
    },
    lastStep () {
      if (this.step > 0) {
        this.step--
      }
    }
  }
}
</script>

<style>

</style>
