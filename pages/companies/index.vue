<script lang="ts" setup>
import CompaniesInfo from '~/components/CompaniesInfo.vue'

socialHead({
  title: 'Our Companies - Aarzoo Hydraulics',
  description: 'Explore all our trusted partners and the companies we work with.',
  image: '~/assets/images/card-logo.png',
})
</script>

<template>
  <NuxtLayout name="main">
    <section aria-labelledby="companies-info" class="mt-8">
      <CompaniesInfo />
    </section>
  </NuxtLayout>
</template>
