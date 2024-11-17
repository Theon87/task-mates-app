import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="card">
        <h1> HELLO WORLD!</h1>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
