<script setup>
import Navbar from "./components/Shared/Navbar.vue";
import Footer from "./components/Shared/Footer.vue";
</script>
<template>
  <div class="dark">
    <div class="min-h-screen w-full flex flex-col">
      <Navbar />

      <main class="flex-1 bg-white dark:bg-gray-800">
        <RouterView />
      </main>
      <Footer />
    </div>
  </div>
</template>
