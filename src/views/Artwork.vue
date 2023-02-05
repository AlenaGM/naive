<template>
  <ArtworkDetails :artwork="currentArtwork" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import api from "@/api";
import ArtworkDetails from "@/components/ArtworkDetails.vue";

const route = useRoute();
const router = useRouter();

const artworkId = ref("");
const currentArtwork = ref({});

onMounted(async () => {
  artworkId.value = route.params.artworkId;
  currentArtwork.value = await api.getArtwork(artworkId.value);
});
</script>
