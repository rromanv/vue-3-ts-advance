<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <h1>Home Page</h1>
  <pre>The counter is: {{ counter.count }}</pre>
  <div class="mini-wrapper">
    <button @click="counter.increment">Increment</button>
    <button @click="counter.decrement">Decrement</button>
  </div>
</template>

<style lang="postcss" scoped>
.mini-wrapper {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
