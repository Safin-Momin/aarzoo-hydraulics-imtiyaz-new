<script lang="ts" setup>
import CompaniesInfo from '~/components/CompaniesInfo.vue'

socialHead({
  title: 'Our Companies - Aarzoo Hydraulic',
  description: 'Explore all our trusted partners and the companies we work with.',
  image: '~/assets/images/card-logo.png',
})
</script>

<template>
  <NuxtLayout name="main">
    <section aria-labelledby="companies-info">
      <CompaniesInfo />
    </section>
  </NuxtLayout>
</template>
