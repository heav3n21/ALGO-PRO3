import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage"
import Footer from "./components/Footer"
import Login from "./pages/Loginpage"
import { setContext } from "@apollo/client/link/context"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";

import ChatRoomPage from "./pages/ChatRoomPage";
import CommunityPage from "./pages/CommunityPage.js";
import Creators from "./pages/Creators";
import Profile from "./pages/Profile";
const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/CommunityChat" element={<CommunityPage/>}/>
            <Route exact path="/Creators" element = {<Creators/>}/>
            <Route exact path="/ChatRoom" element = {<ChatRoomPage/>}/>
            <Route exact path="/profile" element = {<Profile/>}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
