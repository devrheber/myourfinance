<template>
  <div>
  <mdb-navbar
      style="z-index: 2000"
      color="white"
      light
      class="justify-content-between"
    >
      <mdb-navbar-brand href="#">
        <router-link :to="'/'"><img src="~/assets/images/logo.jpg" height="70" /></router-link>
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav class="font-weight-bold lighten-3 py-3 nav-toogler">
          <mdb-nav-item to="/">Inicio</mdb-nav-item>
          <mdb-nav-item href="#">Nosotros</mdb-nav-item>
          <mdb-nav-item to="/cursos">Cursos</mdb-nav-item>
          <mdb-nav-item href="#">Blog</mdb-nav-item>
          <mdb-nav-item href="#">Contacto</mdb-nav-item>
        </mdb-navbar-nav>
        <mdb-form-inline v-if="!getToken">
          <mdb-btn outline="indigo" class="z-depth-0" @click="active">
            <b><span>Ingresar</span></b>
          </mdb-btn>
        </mdb-form-inline>
          <mdb-navbar-nav v-if="getToken" class="nav-flex-icons" right>
            <mdb-dropdown tag="li" class="nav-item">
              <mdb-dropdown-toggle slot="toggle" tag="a" waves-fixed class="nav-link dropdown-toggle waves-effect waves-light" nav-link color="blank">
                  {{getUser.name}}
                  <img :src="getUser.photo" class="img-fluid rounded-circle z-depth-0" width="50">
              </mdb-dropdown-toggle>
              <mdb-dropdown-menu>
                  <mdb-dropdown-item to="/dashboard">Mis Cursos</mdb-dropdown-item>
                  <mdb-dropdown-item to="/perfil">Mi Perfil</mdb-dropdown-item>
                  <mdb-dropdown-item @click="logout()">Cerrar Sesión</mdb-dropdown-item>
              </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <login-modal v-model="dialog" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as mdbvue from 'mdbvue'
import { mapGetters } from 'vuex'
import LoginModal from '~/components/modals/LoginModal.vue'
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}
export default Vue.extend({
  components: {
    LoginModal
  },
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapGetters(['getToken', 'getUser'])
  },
  methods: {
    active() {
      this.dialog = true
    },
    logout() {
      // this.destroyToken();
      this.$router.push({name: 'home'})
    }
  }
})
</script>
