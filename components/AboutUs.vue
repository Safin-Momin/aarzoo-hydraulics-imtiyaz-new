<script setup lang="ts">
import Shipyard from '~/assets/images/shipyard.jpg'
</script>

<template>
  <section class="bg-primary-500 text-white mt-20">
    <div
      class="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 py-16 sm:py-24 relative">
      <!-- Left Content -->
      <div class="md:w-1/2">
        <h3 class="uppercase text-primary-300 text-lg">What we do</h3>
        <h2 class="text-4xl font-semibold mb-4">Hydraulic Pump, Motors Stockiest</h2>
        <p class="mb-4">
          Aarzoo Hydraulics specialized in supply & export of New & reconditioned Hydraulic pumps, motors & their
          spares.
          We endeavor providing quick, efficient & reliable service. We are one of the largest stocklists of this kind
          in India.
          We also supply high-quality Marine Equipment & Spares. We have benchmarked in delivering products to more
          than 40 countries around the world.
        </p>
        <p class="font-semibold">
          Marine & Offshore Hydraulic, Industrial & Earth Moving Hydraulic.
        </p>
      </div>

      <!-- Right Image Content -->
       <div class="h-full">
      <div class="md:w-1/2 absolute -top-20 -bottom-20 right-0">
        <img :src="Shipyard" alt="Shipping Containers" class="rounded-lg shadow-lg w-full h-full" />
      </div>
    </div>
    </div>
  </section>
</template>