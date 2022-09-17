<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Default title',
  meta: [
    {
      name: 'description',
      content: 'This is a DEFAULT description',
    },
    {
      name: 'other-stuff',
      content: 'This is some OTHER stuff',
    },
  ],
})
</script>

<template>
  <div class="wrapper">
    <div class="logos">
      <img src="@/assets/vite.svg" class="logo" alt="Vite logo" />
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </div>
    <RouterView />
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply flex flex-col items-center justify-center h-screen gap-8;
  & .logos {
    @apply flex items-center gap-8;
    & .logo {
      @apply w-48 p-6 will-change-[filter];
      &:hover {
        @apply drop-shadow-2xl shadow-[#646cff];
      }
      &.vue:hover {
        @apply drop-shadow-2xl shadow-[#42b883];
      }
    }
  }
}
</style>
