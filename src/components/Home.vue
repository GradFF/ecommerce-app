<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useProductStore } from "../stores/product";
import Card from "./Shared/Card.vue";

const store = useProductStore();

const { products, btnLoadMoreVisible } = storeToRefs(store);

onMounted(async () => {
  store.LoadCollection();
});
</script>
<template>
  <section class="container px-6 py-10 mx-auto">
    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-3">
      <Card v-for="product in products" :key="product.id" v-bind="product" />
    </div>
    <div class="w-full flex justify-center mt-12">
      <button
        v-if="btnLoadMoreVisible"
        type="button"
        @click="store.LoadModeCollection"
        class="mx-auto inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80"
      >
        Load More...
      </button>
    </div>
  </section>
</template>
