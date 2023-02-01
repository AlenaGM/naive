<template>
  <ArtworkDetails />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/api.js";
import ArtworkDetails from "@/components/ArtworkDetails.vue";

const route = useRoute();
const router = useRouter();
const artworkId = ref("");
const currentProduct = ref({});
</script>
