<script setup>
import Navbar from "./components/Shared/Navbar.vue";
import Footer from "./components/Shared/Footer.vue";
</script>
<template>
  <div class="min-h-screen w-screen flex flex-col">
    <Navbar />

    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
