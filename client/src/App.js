import React, { useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import Navbar from "./components/Navbar";
import FilePages from './pages/SavedWork'
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import CHAT from "../src/components/CHAT";
import Login from "./pages/Loginpage"
import { setContext } from "@apollo/client/link/context"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Auth from "./utils/auth"
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
  const [files, setFiles] = useState([]);
  const updateFiles = (newFiles) => {
    setFiles(newFiles);
  };
  return (
    <ApolloProvider client={client}>
    <Router>
      <nav>
      <div className="flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white  nav--bar">
        <h1 className="w-full text-3xl font-bold primary--text--color">
          CODE CLUB
        </h1>
        <ul className="hidden md:flex">
          <li>
            <Link className="p-4" to="/">HOME</Link>
            <Link className="p-4">LOGIN</Link>
                <Link className="p-4" to="/chat">CHALLENGE</Link>
              <Link className="p-4">CONTACT</Link>
              <Link className="p-4" to='/files'>FILES</Link>
          </li>
        </ul>
        {/* <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                
            </div> */}

        <div className=""></div>
      </div>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chat" element={<CHAT files={files} />}
        />
        <Route path="/files" element={<FilePages files={files} updateFiles={updateFiles} />}/>
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;

