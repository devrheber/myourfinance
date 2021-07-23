<template>
  <div>
    <mdb-container class="mt-5">
    <mdb-modal centered :show="dialog" @close="dialog = false">
      <mdb-card class="bg-white text" style="padding: 0px">
        <div
          class="header pt-3 backgroundImage"
        >
          <mdb-row class="d-flex text-center">
            <h3
              class="text-center"
              style="margin: 5px auto; margin-bottom: 10px"
            >
              <mdb-card-avatar>
                <img
                  src="~/assets/images/logo.jpg"
                  class="rounded-circle"
                  style="height: 100px; width: 100px"
                />
              </mdb-card-avatar>
            </h3>
          </mdb-row>
        </div>
        <mdb-card-body>
            <form method="post" autocomplete="off" @submit.prevent="login" >
                <mdb-container class="grey-text">
                    <mdb-input v-model="username" bg label="Correo" icon="envelope" />
                    <mdb-input v-model="password" bg label="Contraseña" icon="lock" type="password" />
                    <br>
                    <mdb-alert v-if="error" color="danger">
                        Credenciales Incorrectas
                    </mdb-alert>
                    <mdb-alert v-if="welcome" color="success">
                        Bienvenido
                    </mdb-alert>
                    <br>
                    <mdb-btn type="submit" block color="indigo">Ingresar</mdb-btn>
                </mdb-container>
            </form>
        </mdb-card-body>
      </mdb-card>
    </mdb-modal>
  </mdb-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  mdbContainer,
  mdbModal,
  mdbCard,
  mdbRow
} from 'mdbvue'
export default Vue.extend({
  components: {
    mdbContainer,
    mdbModal,
    mdbCard,
    mdbRow
  },
  props: {
    value: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
      username: '',
      password: '',
      error: '',
      dialog: false,
      welcome: false,
    }
  },
  watch: {
    dialog(value) {
      this.$emit('input', value)
    },
    value(v) {
      this.dialog = v
    }
  },
  created () {
    this.dialog = this.value;
  },
  methods: {
    login() {
      this.$store
        .dispatch('retrieveToken', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          if (response.data) {
            this.$router.push({ name: "home" });
          }
        })
        .catch(error => {
          this.error = error.response.data;
        });
    }
  },
})
</script>

<style scoped>
  .backgroundImage{
    background-image: url('~assets/images/f-04.png');
  }
</style>
