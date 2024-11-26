<script setup lang="ts">
import shipImg from '~/assets/images/about-us-ship.png'
import shipOutline from '~/assets/images/ship-outline.png'
</script>

<template>
  <section class="bg-primary-500 text-white mt-20">
    <div class="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 px-4 sm:px-6 py-16 lg:py-24 relative">
      <!-- Left Content -->
      <div class="w-full lg:w-1/2">
        <h3 class="uppercase text-primary-300 md:text-lg">What we do</h3>
        <h2 class="text-2xl md:text-4xl font-semibold mb-4">
          Hydraulic Pump, Motors Stockiest
        </h2>
        <p class="mb-4">
          Aarzoo Hydraulic specialized in supply & export of New & reconditioned Hydraulic
          pumps, motors & their spares. We endeavor providing quick, efficient & reliable
          service. We are one of the largest stocklists of this kind in India. We also
          supply high-quality Marine Equipment & Spares. We have benchmarked in delivering
          products to more than 40 countries around the world.
        </p>

        <div class="flex gap-4 items-center">
          <img :src="shipOutline" alt="Ship SVG" />
          <p>Marine & Offshore Hydraulic, Industrial & Earth Moving Hydraulic.</p>
        </div>
      </div>

      <!-- Right Image Content -->
      <div class="h-full lg:w-5/12 relative lg:absolute lg:right-6">
        <p
          class="absolute bottom-2 sm:bottom-4 lg:-bottom-6 z-10 text-center bg-primary-400 text-white p-2 sm:p-4 rounded-xl mx-2 sm:mx-4 text-sm sm:text-base">
          We are based at Asia’s biggest Ship Recycling Yard at ALANG, Gujarat
          (INDIA), we are stocking & sourcing used & unused hydraulic motors & pumps
          from ship recycling units.
        </p>

        <div class="lg:absolute inset-0 -top-10 -bottom-10">
          <img
            :src="shipImg"
            alt="Shipping Containers"
            class="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

