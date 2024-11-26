<template>
  <div class="flex flex-col min-h-screen w-full">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <div class="flex-1">
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

      <slot />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
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
