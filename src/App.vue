<template>
  <Header />
  <main class="main container">
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<style>
@import "./assets/styles/global.scss";
</style>
