<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <h1 class="text-6xl font-thin tracking-wide">Home Page</h1>
  <pre>The counter is: {{ counter.count }}</pre>
  <div class="mini-wrapper">
    <button class="btn" @click="counter.increment">Increment</button>
    <button class="btn" @click="counter.decrement">Decrement</button>
  </div>
</template>

<style lang="postcss" scoped>
.mini-wrapper {
  display: flex;
  justify-content: center;
  gap: 1rem;

  & .btn {
    @apply inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white bg-blue-600 border border-blue-700 rounded-md;

    &:hover {
      @apply bg-blue-700;
    }

    &:focus {
      @apply outline-none ring-2 ring-offset-2 ring-blue-500;
    }
  }
}
</style>
