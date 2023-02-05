<template>
  <ArtworkDetails :artwork="currentArtwork" :artist="currentArtist" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import ArtworkDetails from "@/components/ArtworkDetails.vue";
import api from "@/api";

const route = useRoute();

const artworkId = ref("");
const currentArtwork = ref({});
const currentArtist = ref({});

onMounted(async () => {
  artworkId.value = route.params.artworkId;
  currentArtwork.value = await api.getArtwork(artworkId.value);
  currentArtist.value = await api.getArtist(currentArtwork.value.artistId);
});
</script>
