import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { Outlet } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";

import Footer from "./components/Footer";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <div className = "App">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
