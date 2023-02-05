<template>
  <Loader v-if="loading" />
  <ArtworkDetails :artwork="currentArtwork" :artist="currentArtist" v-else />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import ArtworkDetails from "@/components/ArtworkDetails.vue";
import Loader from "@/components/ui/Loader.vue";
import api from "@/api";

const route = useRoute();

const artworkId = ref("");
const currentArtwork = ref({});
const currentArtist = ref({});

const loading = ref(true);

onMounted(async () => {
  artworkId.value = route.params.artworkId;
  currentArtwork.value = await api.getArtwork(artworkId.value);
  currentArtist.value = await api.getArtist(currentArtwork.value.artistId);
  loading.value = false;
});
</script>
