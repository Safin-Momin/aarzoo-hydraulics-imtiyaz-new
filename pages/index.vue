<script lang="ts" setup>
import Testimonials from '~/components/Testimonials.vue'
import CompaniesInfo from '~/components/CompaniesInfo.vue'
import OurPerks from '~/components/OurPerks.vue'
import AboutUs from '~/components/AboutUs.vue'

socialHead({
  title: 'Aarzoo Hydraulic - New & Reconditioned Hydraulic Pumps, Motors, Valves',
  description:
    'Global supplier of new and reconditioned hydraulic pumps, motors, valves, and spares. Custom solutions for industrial needs. Reliable worldwide shipping.',
  image: '~/assets/images/card-logo.png',
})
</script>

<template>
  <NuxtLayout name="main">
    <!-- whatsapp icon -->
    <div class="fixed right-4 bottom-4 z-50 whatsapp">
      <NuxtLink
        to="https://wa.me/9558762484?text=Hello%20I%20am%20interested%20in%20your%20products%20and%20would%20like%20to%20discuss%20further."
        target="_blank"
        class="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <WhatsappIcon class="h-10 sm:h-16 w-10 sm:w-16" />
      </NuxtLink>
    </div>

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

<style scoped>
.whatsapp {
  animation: animate 2s infinite alternate ease-in-out;
}

@keyframes animate {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(5px);
  }
}
</style>
