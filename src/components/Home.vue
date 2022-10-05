<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useProductStore } from "../stores/product";
import Card from "./Shared/Card.vue";

const store = useProductStore();

const { products } = storeToRefs(store);

onMounted(async () => {
  store.getCollection();
  console.log(products.value);
});
</script>
<template>
  <section class="container px-6 py-10 mx-auto">
    <div
      class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3"
    >
      <Card v-for="product in products" :key="product.id" v-bind="product" />
    </div>
  </section>
</template>
