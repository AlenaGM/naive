<template>
  <Loader v-if="loading" />
  <ArtistDetails :artist="currentArtist" v-else />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import ArtistDetails from "@/components/ArtistDetails.vue";
import Loader from "@/components/ui/Loader.vue";
import api from "@/api";

const route = useRoute();

const artistId = ref("");
const currentArtist = ref({});

const loading = ref(true);

onMounted(async () => {
  artistId.value = route.params.id;
  currentArtist.value = await api.getArtist(artistId.value);
  loading.value = false;
});
</script>
