<template>
  <Header />
  <main class="main container">
    <div>
      <p v-if="error">Something went wrong...</p>
      <p v-if="loading">Loading...</p>
      <p
        v-else
        v-for="character in result.characters.results"
        :key="character.id"
      >
        {{ character.name }}
      </p>
    </div>
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const { result, loading, error } = useQuery(CHARACTERS_QUERY);
</script>

<style>
@import "./assets/styles/global.scss";
</style>
