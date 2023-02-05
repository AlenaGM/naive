<template>
  <ArtistDetails :artist="currentArtist" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import ArtistDetails from "@/components/ArtistDetails.vue";
import api from "@/api";

const route = useRoute();

const artistId = ref("");
const currentArtist = ref({});

onMounted(async () => {
  artistId.value = route.params.id;
  currentArtist.value = await api.getArtist(artistId.value);
});
</script>
