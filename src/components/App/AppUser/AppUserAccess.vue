<template>
    <v-tabs centered icons-and-text grow>
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-app-user-access-login-form">
            Acceder
            <v-icon>phone</v-icon>
        </v-tab>
        <v-tab href="#tab-app-user-access-register-form">
            Registrarse
            <v-icon>favorite</v-icon>
        </v-tab>
        <v-tab-item id="tab-app-user-access-login-form">
            <app-user-access-login-form/>
        </v-tab-item>
        <v-tab-item id="tab-app-user-access-register-form">
            <app-user-access-register-form/>
        </v-tab-item>
    </v-tabs>
</template>
<script>
import AppUserAccessLoginForm from './_Forms/AppUserAccessLoginForm.vue'
import AppUserAccessRegisterForm from './_Forms/AppUserAccessRegisterForm.vue'
export default {
  components: { AppUserAccessLoginForm, AppUserAccessRegisterForm }
}
</script>

<style>

</style>
