<template>
  <mdb-footer
    id="footer-app-position"
    color="black"
    style="z-index: 2000"
    class="font-small pt-4 mt-4"
  >
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col lg="3" md="6" sm="12">
          <h5 class="title">
            <b>Empresa</b>
          </h5>
          <ul>
            <li class="list-unstyled"><a href="#!">Nosotros</a></li>
            <li class="list-unstyled">
              <a href="#!">Políticas de Privacidad</a>
            </li>
            <li class="list-unstyled">
              <a href="#!">Términos y Condiciones</a>
            </li>
          </ul>
        </mdb-col>

        <mdb-col lg="3" sm="12"></mdb-col>
        <mdb-col lg="3" sm="12"></mdb-col>

        <mdb-col lg="3" md="6" sm="12">
          <div class="text-left">
            <div>
              <h5 class="title">
                <b>Contáctanos</b>
              </h5>
              <p>
                <span>empresa@gmail.com</span>
              </p>
            </div>
            <div>
              <a type="button" class="btn-floating btn-small btn-fb"
                ><mdb-icon fab icon="facebook"
              /></a>
              <a type="button" class="btn-floating btn-small btn-gplus"
                ><mdb-icon fab icon="instagram"
              /></a>
              <a type="button" class="btn-floating btn-small btn-tw"
                ><mdb-icon fab icon="twitter"
              /></a>
              <a type="button" class="btn-floating btn-small btn-dribbble"
                ><mdb-icon fab icon="youtube"
              /></a>
            </div>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <mdb-container>
      <div
        class="footer-copyright text-center py-3"
        style="border-top: 2px solid #fff"
      >
        <mdb-container fluid>
          Desarrollado por RODMENSOF - Copyright &copy;2020
        </mdb-container>
      </div>
    </mdb-container>
  </mdb-footer>
</template>

<script>
import Vue from 'vue'
import * as mdbvue from 'mdbvue'

for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}
export default Vue.extend({
  components: {},
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
})
</script>

<style lang="scss" scoped></style>
