<template>
  <div>
    <slot></slot>
    <button class="bg-gray-300 py-2 px-4" @click="handlerCounter">{{ counter }}</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const counter = ref(0)
const handlerCounter = () => {
    counter.value++
}
</script>

<style scoped>

</style>