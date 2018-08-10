<template>
    <v-menu bottom origin="center center" transition="scale-transition" :close-on-content-click="false" :nudge-width="400" offset-y>
        <v-btn slot="activator" flat>
            Acceso
        </v-btn>
        <v-card class="pa-4">
            <h1>Acceso</h1>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="existingUser.name" :counter="10" label="Usario o Correo Electronico" required></v-text-field>
                <v-text-field v-model="existingUser.password" label="Contraseña" required></v-text-field>
                <v-checkbox v-model="rememberMe" label="Recordar" required></v-checkbox>
                <v-btn :disabled="!valid" @click="login">
                    Acceder
                </v-btn>
                <v-btn @click="singup">Registrate</v-btn>
            </v-form>
        </v-card>
    </v-menu>
</template>

<script>
export default {
  data: () => ({
    rememberMe: false,
    valid: true,
    existingUser: {
      name: '',
      password: ''
    },
    newUser: {
      name: '',
      password: ''
    }
  }),
  methods: {
    login () {
      console.log('Hallo!')
    },
    singup () {
      console.log('Hallo!')
    }
  }
}
</script>

<style>

</style>
