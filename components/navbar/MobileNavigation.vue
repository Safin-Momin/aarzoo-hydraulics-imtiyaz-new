<script lang="ts" setup>
import { Popover, PopoverButton, PopoverOverlay, PopoverPanel } from '@headlessui/vue'

import MobileNavIcon from './MobileNavIcon.vue'

const route = useRoute()

const navigation = {
  pages: [
    { name: 'Home', href: '/', activeMenu: 'home' },
    { name: 'About', href: '/about', activeMenu: 'about' },
    { name: 'Services', href: '/services', activeMenu: 'services' },
  ],
}

const currentActiveMenu = computed(() => {
  const currentPath = route.path
  const currentPage = navigation.pages.find((page) => page.href === currentPath)
  return currentPage ? currentPage.activeMenu : null
})

const getTitle = (page: any) => {
  return page.href === '/' ? 'Aarzoo Hydraulic' : page.name
}
</script>

<template>
  <Popover>
    <template #default="{ open }">
      <PopoverButton
        class="relative z-10 flex h-8 w-8 items-center justify-center ring-0 outline-none"
        aria-label="Toggle Navigation"
      >
        <MobileNavIcon :open="open" />
      </PopoverButton>

      <Transition
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <PopoverOverlay v-if="open" class="fixed inset-0" />
      </Transition>
      <Transition
        enter-active-class="transition duration-150 ease-out transform"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-100 ease-in transform"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          v-if="open"
          class="absolute inset-x-0 top-full mt-8 flex origin-top flex-col rounded-2xl bg-black p-4 text-lg tracking-tight shadow-xl border border-secondary/10"
        >
          <div class="space-y-1 p-2">
            <NuxtLink
              v-for="page in navigation.pages"
              :key="page.name"
              :href="page.href"
              :title="getTitle(page)"
              class="flex-none group relative block transition duration-300 px-3 py-2.5 hover:text-primary-600 text-center"
              :class="[
                page.activeMenu === currentActiveMenu
                  ? 'text-primary-600 hover:text-primary-400'
                  : 'text-secondary hover:text-primary-600',
              ]"
              :aria-current="page.activeMenu === currentActiveMenu ? 'page' : undefined"
            >
              {{ page.name }}
            </NuxtLink>

            <div class="flex items-center w-full gap-y-8 flex-col pt-3">
              <BaseDivider />

              <NuxtLink
                to="https://wa.me/9558762484?text=Hello%20I%20am%20interested%20in%20your%20products%20and%20would%20like%20to%20discuss%20further."
                target="_blank"
              >
                <button
                  class="flex justify-center items-center py-2 px-4 rounded-lg bg-primary-500 hover:bg-primary-500/90 hover:transition-all cta"
                >
                  <span class="inline relative text-lg text-secondary tracking-wider"
                    >Let's Connect</span
                  >
                  <svg class="w-4 h-2.5 ml-3" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg>
                </button>
              </NuxtLink>
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </template>
  </Popover>
</template>

<style scoped>
.cta svg {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #eeeeee;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cta:hover svg {
  transform: translateX(0);
}
</style>
