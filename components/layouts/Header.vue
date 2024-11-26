<script lang="ts" setup>
import MobileNavigation from '~/components/navbar/MobileNavigation.vue'
import logo from '~/assets/images/card-logo-transparent.png'

const route = useRoute()

const navigation = {
  pages: [
    { name: 'Home', href: '/', activeMenu: 'home' },
    { name: 'About', href: '/about', activeMenu: 'about' },
    { name: 'Services', href: '/services', activeMenu: 'services' },
  ],
}

const currentActiveMenu = computed(() => {
  const currentHash = route.hash.replace('#', '')
  const currentPage = navigation.pages.find((page) => page.activeMenu === currentHash)
  return currentPage ? currentPage.activeMenu : null
})

const getTitle = (page: any) => {
  return page.href === '/' ? 'Aarzoo Hydraulic' : page.name
}

const isHomePage = computed(() => route.path === '/')
</script>

<template>
  <div class="w-full mx-auto max-w-7xl px-4 lg:px-6">
    <div>
      <div class="relative flex h-12 lg:h-14 items-center justify-between my-6 sm:my-10">
        <div class="absolute inset-y-0 flex items-center">
          <div
            class="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start"
          >
            <div class="flex flex-shrink-0 items-center gap-x-2">
              <NuxtLink to="/">
                <img
                  class="h-28 sm:h-40 aspect-1"
                  :src="logo"
                  alt="Aarzoo Hydraulic logo"
                />
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="flex justify-end items-center w-full" v-if="isHomePage">
          <div class="lg:hidden z-50">
            <MobileNavigation />
          </div>

          <div
            class="hidden absolute lg:block mx-auto bg-primary-300 backdrop-blur-md rounded-full left-0 right-0 w-fit px-4"
          >
            <div class="flex space-x-4">
              <NuxtLink
                v-for="page in navigation.pages"
                :key="page.name"
                :title="getTitle(page)"
                :href="`#${page.activeMenu}`"
                class="flex-none group relative block transition duration-300 px-2.5 py-2 hover:text-primary-600"
                :class="[
                  page.activeMenu === currentActiveMenu
                    ? 'text-primary-600 hover:text-primary-400 active'
                    : 'text-secondary hover:text-primary-600',
                ]"
                :aria-current="page.activeMenu === currentActiveMenu ? 'page' : undefined"
                >{{ page.name }}
                <span
                  class="absolute inset-x-1 h-px bg-gradient-to-r from-primary-500/0 from-10% via-primary-400 to-primary-500/0 to-90% transition duration-300 bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  :class="{
                    'opacity-100 scale-x-100': page.activeMenu === currentActiveMenu,
                  }"
                />
                <span
                  class="overflow-hidden absolute inset-0 transition origin-bottom duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                  :class="{
                    'opacity-100 scale-100': page.activeMenu === currentActiveMenu,
                  }"
                >
                  <span
                    class="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-t from-primary-500/30 to-transparent blur rounded-t-full"
                  />
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex w-full justify-end">
          <NuxtLink
            to="https://wa.me/9558762484?text=Hello%20I%20am%20interested%20in%20your%20products%20and%20would%20like%20to%20discuss%20further."
            target="_blank"
          >
            <button
              class="relative m-auto flex justify-center items-center py-1.5 px-4 transition-all border-none bg-none cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:block before:rounded-[50px] before:bg-primary-300 before:w-10 before:h-10 before:transition-all before:duration-300 before:hover:w-full before:hover:bg-primary-300 active:scale-95 cta"
            >
              <span class="inline relative text-lg text-secondary tracking-wider"
                >Let's Connect</span
              >
              <svg class="w-4 h-2.5" viewBox="0 0 13 10">
                <path d="M1,5 L11,5" />
                <polyline points="8 1 12 5 8 9" />
              </svg>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
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
