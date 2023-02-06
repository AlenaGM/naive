<template>
  <Loader v-if="loading" />
  <ArtworkDetails :artwork="currentArtwork" v-else />
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

const loading = ref(true);

onMounted(async () => {
  artworkId.value = route.params.artworkId;
  currentArtwork.value = await api.getArtwork(artworkId.value);
  loading.value = false;
});
</script>
