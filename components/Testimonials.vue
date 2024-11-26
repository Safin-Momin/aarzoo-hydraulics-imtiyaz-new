<script lang="ts" setup>
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import testimonial1 from '~/assets/images/testimonials/1.jpg'
import testimonial2 from '~/assets/images/testimonials/2.jpg'
import testimonial3 from '~/assets/images/testimonials/3.jpg'
import testimonial4 from '~/assets/images/testimonials/4.jpg'
import testimonial5 from '~/assets/images/testimonials/5.jpg'
import testimonial6 from '~/assets/images/testimonials/6.jpg'
import testimonial7 from '~/assets/images/testimonials/7.jpg'

const testimonials = [
  {
    img: testimonial1,
  },
  {
    img: testimonial2,
  },
  {
    img: testimonial3,
  },
  {
    img: testimonial4,
  },
  {
    img: testimonial5,
  },
  {
    img: testimonial6,
  },
  {
    img: testimonial7,
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
              class="!w-full !h-96 sm:!h-[500px] object-cover rounded-xl"
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
