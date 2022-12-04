module.exports = {
  client: {
    service: {
      name: "naive",
      // URL to the GraphQL API
      url: "https://countries.trevorblades.com/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
