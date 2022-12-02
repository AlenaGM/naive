import { createApp } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";

const pinia = createPinia();

const httpLink = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(pinia)
  .use(router)
  .mount("#app");
