<script lang="ts" setup>
</script>

<template>
  <footer class="text-primary-900 border-t border-gray-200 px-4 sm:px-6">
    <div class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left py-16 sm:py-24">
      <!-- Know Us Section -->
      <div class="flex flex-col gap-6">
        <h3 class="text-lg font-semibold">KNOW US</h3>
        <p class="text-sm leading-relaxed">
          Aarzoo Hydraulics is specialized in supply & export of new and recondition
          hydraulic pumps, motors & its spares with a strong commitment to
          fast, efficient, and reliable service. The company today stands as
          the largest stockiest of marine & industrial hydraulic pumps, motors
          & spares.
        </p>

        <div class="flex justify-center md:justify-start space-x-4 sm:space-x-6">
        <NuxtLink to="https://www.facebook.com/share/19gDVDqFF7/?mibextid=LQQJ4d&direct_share_include_copy=1&fb_entity_type=unknown" class="text-primary-400 hover:text-primary-600" target="_blank" rel="noopener noreferrer">
          <FacebookIcon class="h-6 w-6" />
        </NuxtLink>

        <NuxtLink to="https://www.instagram.com/aarzoo_hydraulic_?igsh=b3M1ZGMwaDB1MW5o" class="text-primary-400 hover:text-primary-600" target="_blank" rel="noopener noreferrer">
          <InstagramIcon class="h-6 w-6" />
        </NuxtLink>

        <NuxtLink to="https://x.com/AarzooHydraulic" class="text-primary-400 hover:text-primary-600" target="_blank" rel="noopener noreferrer">
          <TwitterIcon class="h-6 w-6" />
        </NuxtLink>
      </div>
      </div>

      <!-- Direct Links Section -->
      <div class="flex flex-col gap-6">
        <h3 class="text-lg font-semibold">DIRECT LINKS</h3>
        <ul class="space-y-4 text-sm">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://wa.me/9558762484?text=Hello%20I%20am%20interested%20in%20your%20products%20and%20would%20like%20to%20discuss%20further." target="_blank" aria-label="Chat on WhatsApp">Enquiry Now</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/companies">Companies Info</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Reach Us Section -->
      <div class="flex flex-col gap-6">
        <h3 class="text-lg font-semibold">REACH US</h3>
        <p class="text-sm">
          Madhiya Rd, near Safal Marine Motors, Kumbharwada, Bhavnagar, Gujarat 364001, India
        </p>
        <ul class="space-y-4">
          <li>
            <strong>Email:</strong>
            <NuxtLink
              to="mailto:aarzoohydraulic@gmail.com"
              class="text-primary-400 hover:text-primary-800"
            >
            aarzoohydraulic@gmail.com
            </NuxtLink>
          </li>
          <li>
            <strong>Phone:</strong>
            +91 9558762484
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-200 py-4 sm:py-6 text-center">
      <p>All Rights Reserved By Aarzoo Hydraulics</p>
    </div>
  </footer>
</template>
