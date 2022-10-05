<script setup>
import Card from "./Shared/Card.vue";
</script>
<template>
  <section class="container mx-auto py-8">
    <div
      class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3"
    >
      <Card v-for="i in 6" :key="i" />
    </div>
  </section>
</template>
