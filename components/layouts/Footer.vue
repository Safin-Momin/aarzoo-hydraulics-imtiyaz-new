<script lang="ts" setup>
</script>

<template>
  <footer>
    <div class="mx-auto max-w-7xl overflow-hidden flex flex-col items-center px-6 py-10 sm:py-20">
      <div class="flex justify-center space-x-6 sm:space-x-10">
        <!-- Facebook Icon -->
        <a href="https://facebook.com/yourpage" class="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
          <FacebookIcon class="h-6 w-6" />
        </a>

        <!-- Instagram Icon -->
        <a href="https://instagram.com/yourpage" class="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
          <InstagramIcon class="h-6 w-6" />
        </a>

        <!-- Twitter Icon -->
        <a href="https://twitter.com/yourpage" class="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
          <TwitterIcon class="h-6 w-6" />
        </a>

        <!-- GitHub Icon -->
        <a href="https://github.com/yourpage" class="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
          <GithubIcon class="h-6 w-6" />
        </a>

        <!-- Youtube Icon -->
        <a href="https://github.com/yourpage" class="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
          <YoutubeIcon class="h-6 w-6" />
        </a>
      </div>

      <p class="mt-10 text-center text-sm sm:text-base leading-5 text-gray-500 flex items-center justify-center">
        &copy; {{ new Date().getFullYear() }} Aarzoo Hydraulics, All rights reserved.
      </p>
    </div>
  </footer>
</template>
