<template>
  <div>
    <nav-bar/>

    <mdb-container>
      <carousel-home />
    </mdb-container>

    <div>
      <mdb-container>
        <mdb-row v-if="courseList.length > 0">
          <mdb-col v-for="course in courseList" :key="'list-course-' + course.id" sm="4" style="margin-bottom: 20px;">
            <mdb-card
              class="card-image z-depth-0"
              style="height: 280px;"
              :style="{
                'background-image': 'url(' + course.cover_photo + ')',
                backgroundSize: '100% 100%',
              }"
            >
              <div
                class="text-white text-center d-flex align-items-center py-5 px-4"
              >
                <div class="content-card-t rgba-black-light">
                  <div class="div-show-money-card">
                    <span>${{ course.price }}</span>
                  </div>

                  <mdb-card-title tag="h5" class="pt-2">
                    <strong>
                      <span>{{ course.name }}</span>
                    </strong>
                  </mdb-card-title>

                  <router-link style="color: white;" :to="'/temario/' + course.id">
                      <mdb-btn size="sm" color="light-green lighten-1">
                          Inscribirse
                      </mdb-btn>
                  </router-link>
                </div>
              </div>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
    <footer-app />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdbContainer } from 'mdbvue'
import CarouselHome from '~/components/partials/CarouselHome.vue'
import NavBar from '~/components/partials/NavBar.vue'
import FooterApp from '~/components/partials/Footer.vue'
import * as course from '~/interfaces/Course'
export default Vue.extend({
  components: { NavBar, mdbContainer, CarouselHome, FooterApp },
  data() {
    return {
      courseList: [course],
      modal: false,
    }
  },
  mounted() {
    this.getCourses()
  },
  methods: {
    getCourses() {
      this.$axios.get<course.Course[]>('getCoursePage').then((courses: course.CourseResponse) => {
        if (courses.data) {
          this.courseList = courses.data
        }
      })
    },
    handleClose() {
      this.modal = false
    }
  }
})
</script>
