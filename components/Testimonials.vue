<script lang="ts" setup>
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import shipImg from '~/assets/images/card-logo.png'
import svg1 from '~/assets/images/logo.png'
import 'vue3-carousel/dist/carousel.css'

const testimonials = [
  {
    img: shipImg,
  },
  {
    img: svg1,
  },
]
</script>

<template>
  <div v-if="testimonials?.length" class="testimonial-carousel relative">
    <div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 my-8">
        <Carousel
          :wrap-around="true"
          :autoplay="3000"
          :transition="1000"
          :pause-autoplay-on-hover="true"
        >
          <Slide v-for="currentTestimonial in testimonials" :key="currentTestimonial">
            <img
              :src="currentTestimonial.img"
              alt="Testimonial"
              class="!w-full !h-96 object-cover rounded-xl"
            />
          </Slide>

          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<style type="scss">
.testimonial-carousel .carousel__pagination-button::after {
  @apply w-2 h-2 rounded-full;
}
</style>
