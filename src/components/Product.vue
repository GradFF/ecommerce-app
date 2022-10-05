<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/product";

const store = useProductStore();

const route = useRoute();

const product = ref({});
onMounted(async () => {
  product.value = await store.getDocument(route.params.id);
});
</script>
<template>
  <section class="container px-6 py-10 mx-auto">
    <h1
      class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"
    >
      {{ product.brand }}
    </h1>

    <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
      <img
        class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl max-h-96"
        :src="product.thumbnail"
        alt="product.title"
      />

      <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
        <p class="text-sm text-blue-500 uppercase">{{ product.category }}</p>

        <p
          class="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"
        >
          {{ product.title }}
        </p>

        <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          {{ product.description }}
        </p>

        <p
          class="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"
        >
          ${{ product.price }}
        </p>

        <div class="flex items-center mt-6 space-x-2">
          <img
            v-for="img in product.images"
            :key="img"
            class="object-cover object-center w-10 sm:w-16 h-10 sm:h-16 rounded-lg"
            :src="img"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
