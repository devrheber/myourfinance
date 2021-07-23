<template>
  <div>
    <login-modal v-model="modal" />

    <mdb-carousel
      :items="carouselList.length"
      multi
      style="min-height: 250px"
      indicators
      controlls
      slide
      :interval="3000"
    ></mdb-carousel>
    <template v-for="(carousel, index) in carouselList">
        <div
          :key="'carousel_home_' + index"
          :style="{ 'background-image': 'url(' + carousel.image + ')' }"

          class="div-home-button d-sm-none d-md-block"
        >
          <div class="div-content">
            <div>
              <h1 class="title-content-home">
                <span>{{ carousel.title }}</span>
              </h1>
              <h1 class="title-content-home">
                <strong>
                  <span style="font-weight: bold; color: #3f51b5">
                    {{ carousel.subtitle }}
                  </span>
                </strong>
              </h1>
            </div>

            <div style="max-width: 200px">
              <span class="text-content-home-information">
                {{ carousel.comment }}
              </span>
              <mdb-btn
                size="sm"
                color="indigo"
                class="z-depth-0"
                @click="modal = true"
              >
                <b><span>Ingresar</span></b>
              </mdb-btn>
            </div>
          </div>
        </div>
      </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdbCarousel } from 'mdbvue'
import LoginModal from '~/components/modals/LoginModal.vue'
export default Vue.extend({
  components: { mdbCarousel, LoginModal },
  data() {
    return {
      carouselList: [],
      modal: false
    }
  },
  computed: {},
  methods: {}
})
</script>

<style scoped>
.content-card-t {
  top: 40px;
  bottom: 0px;
  width: 100%;
  padding: 5px;
  padding-top: 0px;
  position: relative;
}

.div-home-button {
  position: relative;
  width: 100%;
  margin: 5px auto;
  min-height: 500px;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.div-home-button .div-content {
  top: auto;
  width: 300px;
  position: absolute;
  bottom: 100px;
  left: 100px;
}

.div-show-money-card {
  background-color: black;
  width: 150px;
  margin: 0px auto;
  border-radius: 0px 0px 20px 20px;
}

@media (max-width: 640px) {
  .div-home-button {
    width: 100%;
    height: 30%;
    min-height: 200px;
  }

  .div-home-button .div-content {
    top: auto;
    width: 150px;
    position: absolute;
    bottom: 0px;
    left: 20px;
  }

  .title-content-home {
    font-size: 16px;
  }

  .text-content-home-information {
    font-size: 11px;
  }
}
</style>
