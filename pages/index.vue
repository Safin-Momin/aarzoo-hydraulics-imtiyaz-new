<script lang="ts" setup>
import Testimonials from '~/components/Testimonials.vue'
import CompaniesInfo from '~/components/CompaniesInfo.vue'
import OurPerks from '~/components/OurPerks.vue'
import AboutUs from '~/components/AboutUs.vue'

socialHead({
  title: 'Aarzoo Hydraulic - New & Reconditioned Hydraulic Pumps, Motors, Valves',
  description:
    'Global supplier of new and reconditioned hydraulic pumps, motors, valves, and spares. Custom solutions for industrial needs. Reliable worldwide shipping.',
  image: '/images/card-logo.png',
})
</script>

<template>
  <NuxtLayout name="main">
    <main>
      <!-- Hero section -->
      <div class="relative">
        <Testimonials />
      </div>

      <section aria-labelledby="about-us" id="about" class="sm:py-24">
        <AboutUs />
      </section>

      <section aria-labelledby="companies-info" id="services" class="py-16 sm:py-24">
        <CompaniesInfo :limit="4" />
      </section>

      <section aria-labelledby="perks-heading">
        <OurPerks />
      </section>
    </main>
  </NuxtLayout>
</template>
