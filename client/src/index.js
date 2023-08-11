import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ComponentRegistryProvider } from "./registry";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import TrackCard from "./containers/track-card";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const initialRegistry = {
  "TrackCard": TrackCard
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <ComponentRegistryProvider initialRegistry={initialRegistry}>
      <GlobalStyles />
      <Pages />
    </ComponentRegistryProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
