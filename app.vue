<script lang="ts" setup>
const isLoading = ref(false)
</script>

<template>
  <div>
    <NuxtPage v-if="!isLoading" />
    <BaseLoader v-else class="h-screen overflow-hidden overflow-y-auto h-screen-ios" />

    <VitePwaManifest />
  </div>
</template>
