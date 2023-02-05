<template>
  <ArtworkDetails :artwork="currentArtwork" :artist="currentArtist" />
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
const currentArtist = ref({});

onMounted(async () => {
  artworkId.value = route.params.artworkId;
  currentArtwork.value = await api.getArtwork(artworkId.value);
  currentArtist.value = await api.getArtist(currentArtwork.value.artistId);
});
</script>
