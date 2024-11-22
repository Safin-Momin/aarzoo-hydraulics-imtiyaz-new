<script lang="ts" setup>
import { CompaniesStub } from '~/stub/companies'

import logo from '~/assets/images/logo.png'
import shipYard from '~/assets/images/shipyard.jpg'
import shipOutline from '~/assets/images/ship-outline.png'

const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
})

const hoverIndex = ref<number | null>(null)

const companies = CompaniesStub().companies

const displayedCompanies = computed(() => {
  return props.limit ? companies.slice(0, props.limit) : companies
})
</script>

<template>
  <div class="mx-auto max-w-7xl w-full px-4 sm:px-6 pb-16 sm:pb-24">
    <!-- <div class="flex">
    <div>
      <div class="head">What We Do</div>

      <h2 class="title"><strong>Hydraulic Pump, Motors Stockiest</strong></h2>

      <div class="row">
        <div class="col-md-7 col-sm-12">
          <div class="heading-seperator"><span></span></div>

          <p>
            H.M.Traders specialized in supply &amp; export of New &amp; reconditioned
            Hydraulic pumps,motors &amp; their spares. We endeavour providing quick,
            efficient &amp; reliable service. We are one of the largest stocklists of this
            kind in India. We also supply high quality Marine Equipment &amp; Spares. We
            have benchmark in delivering products to more than 40 countries around the
            world.
          </p>

          <ul>
            <li>
              <a href=""
                ><img
                  :src="shipOutline"
                  alt="Used Hydraulic Pumps Suppliers Alang"
                />Marine &amp; Offshore Hydraulic, Industrial &amp; Earth Moving
                Hydraulic.</a
              >
            </li>
          </ul>
        </div>
      </div>

        <div class="col-md-5 hidden-xs hidden-sm">
          <img
            :src="shipYard"
            alt="Reconditioned Hydraulic Motors Supplier Alang"
            class="img-responsive sldimg"
          />
        </div>
      </div>
    </div> -->

    <div class="flex items-center justify-between gap-x-4 gap-y-2 flex-wrap mb-6">
      <h2
        id="favorites-heading"
        class="text-xl sm:text-2xl font-semibold tracking-tight text-primary-500"
      >
        Trusted Partners
      </h2>

      <NuxtLink
        v-if="props.limit"
        to="/companies"
        class="font-medium text-primary-600 hover:text-primary-500 md:block"
      >
        View More
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
          <img
            :src="company.img ?? logo"
            alt="Company Logo"
            class="w-full h-full object-center"
          />
        </div>
        <div
          class="details absolute bottom-0 w-full backdrop-blur-md bg-primary-400/30 shadow-md text-white p-4 overflow-hidden"
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
