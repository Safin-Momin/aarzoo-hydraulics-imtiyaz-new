<script lang="ts" setup>
import shipImg from '~/assets/images/ship.jpg'

const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
})

const hoverIndex = ref<number | null>(null)

const companies = ref([
  { name: 'HAGGLUND', description: 'High-quality hydraulic drives for various industries.' },
  { name: 'HYDROMATIK REXROTH', description: 'Leader in hydraulic pumps and motors for heavy machinery.' },
  { name: 'MACGREGOR', description: 'Advanced hydraulic systems for marine applications.' },
  { name: 'LMG', description: 'Offers innovative hydraulic solutions for industrial use.' },
  { name: 'SAUER SUNDSTRAND', description: 'Known for robust mobile and industrial hydraulic components.' },
  { name: 'VOLVO', description: 'Renowned for durable hydraulic solutions in automotive and industrial sectors.' },
  { name: 'SAUER DANFOSS', description: 'Leading provider of hydraulic components for mobile equipment.' },
  { name: 'OSTRA', description: 'Specializes in hydraulic systems for marine and industrial sectors.' },
  { name: 'NIKKO THERMOFLEX', description: 'Manufacturer of heat-resistant hydraulic systems.' },
  { name: 'HATLAPA', description: 'Expert in high-performance hydraulic systems for maritime use.' },
  { name: 'NACHI', description: 'Produces reliable hydraulic components for multiple industries.' },
  { name: 'BAUERBÜER', description: 'Known for heavy-duty hydraulic and drive solutions.' },
  { name: 'KAWASAKI STAFFA', description: 'Specializes in axial piston motors and other hydraulic solutions.' },
  { name: 'FUKUSHIMA', description: 'Produces efficient hydraulic systems for diverse applications.' },
  { name: 'HYDROSTER', description: 'High-quality hydraulic pumps and valves for industrial use.' },
  { name: 'DOWMAX', description: 'Offers rugged hydraulic solutions for heavy-duty industries.' },
  { name: 'BRATTVAAG', description: 'Known for marine hydraulic systems and winches.' },
  { name: 'LINDE', description: 'Innovative hydraulic solutions for various sectors.' },
  { name: 'MITSUBISHI', description: 'Provides hydraulic systems for automotive and industrial applications.' },
  { name: 'CATERPILLER', description: 'Durable hydraulic systems for construction machinery.' },
  { name: 'ZOLLERN', description: 'Manufacturer of high-precision hydraulic components.' },
  { name: 'VICKERS', description: 'Expert in hydraulic pumps, valves, and cylinders.' },
  { name: 'POCLAINE', description: 'Known for reliable hydraulic motors and components.' },
  { name: 'OIL GEAR', description: 'Specialist in high-pressure hydraulic pumps.' },
  { name: 'UCHIDA', description: 'Provides hydraulic solutions for heavy machinery.' },
  { name: 'EBARA', description: 'Manufacturer of hydraulic pumps for industrial applications.' },
  { name: 'BRUENINGHAUS', description: 'Renowned for innovative hydraulic drive systems.' },
  { name: 'KAYABA', description: 'Offers hydraulic solutions for automotive and industrial use.' },
  { name: 'IHI', description: 'Known for industrial-grade hydraulic components.' },
  { name: 'DENSION', description: 'Produces efficient hydraulic pumps and valves.' },
  { name: 'NORWINCH', description: 'Provides hydraulic winches and marine systems.' },
  { name: 'DANFOSS', description: 'Innovative hydraulic solutions for mobile equipment.' },
  { name: 'WINCHES', description: 'High-performance winches for industrial applications.' },
  { name: 'SLEWING GEAR', description: 'Specializes in gear systems for industrial machinery.' },
  { name: 'PARKER', description: 'Global leader in hydraulic systems and components.' },
  { name: 'OIL COOLER', description: 'Efficient cooling solutions for hydraulic systems.' },
])

const displayedCompanies = computed(() => {
  return props.limit ? companies.value.slice(0, props.limit) : companies.value
})
</script>

<template>
  <div class="mx-auto max-w-7xl w-full px-4 sm:px-6">
    <div class="md:flex md:items-center md:justify-between mb-6">
      <h2 id="favorites-heading" class="text-xl sm:text-2xl font-semibold tracking-tight text-primary-500">
        Trusted Partners
      </h2>
      
      <NuxtLink
        v-if="props.limit"
        to="/companies"
        class="font-medium text-primary-600 hover:text-primary-500 md:block"
      >
        Shop the collection
        <span aria-hidden="true"> &rarr;</span>
      </NuxtLink>
    </div>

    <div class="w-full grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
      <div
        v-for="(company, index) in displayedCompanies"
        :key="company.name"
        class="card relative w-full h-56 sm:h-64 lg:h-80 shadow-md overflow-hidden rounded-xl"
        @mouseenter="hoverIndex = index"
        @mouseleave="hoverIndex = null"
      >
        <div class="absolute inset-0">
          <img :src="shipImg" alt="Company Logo" class="w-full h-full object-cover object-center">
        </div>
        <div
          class="details absolute bottom-0 w-full backdrop-blur-md shadow-md text-white p-4 overflow-hidden"
          :class="{ 'max-h-60': hoverIndex === index, 'max-h-12': hoverIndex !== index }"
        >
          <h2 class="font-bold text-center leading-7">
            {{ company.name }}
          </h2>
          <p class="text-sm">
            {{ company.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details {
  transition: max-height 0.5s ease-in-out;
}
</style>
