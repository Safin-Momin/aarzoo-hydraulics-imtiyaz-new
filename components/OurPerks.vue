<script lang="ts" setup>
const perks = [
  {
    name: 'Fastest delivery',
    imageUrl: '../images/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products as soon as possible.',
  },
  {
    name: 'All year discount',
    imageUrl: '../images/icon-gift-card-light.svg',
    description: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    imageUrl: '../images/icon-planet-light.svg',
    description: 'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
]
</script>

<template>
  <div class="border-t border-gray-200 bg-gray-50">
    <h2 id="perks-heading" class="sr-only">
      Our perks
    </h2>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:px-8">
      <div class="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
        <div
          v-for="perk in perks" :key="perk.name"
          class="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
        >
          <div class="md:flex-shrink-0">
            <div class="flow-root">
              <img class="-my-1 mx-auto h-24 w-auto" :src="perk.imageUrl" alt="">
            </div>
          </div>
          <div class="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
            <h3 class="text-base font-medium text-primary-900">
              {{ perk.name }}
            </h3>
            <p class="mt-3 text-sm text-gray-500">
              {{ perk.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
