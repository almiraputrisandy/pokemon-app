import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Pokemons from './components/Pokemons';
import MyPokemons from './components/MyPokemons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache()
});

function App() {
  const [active, setActive] = useState("pokeList");

  return (
    <ApolloProvider client={client}>
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center" style={{ flex: 1}}>
            <Nav.Item>
              <Nav.Link href="#" onClick={function(){
                setActive("pokeList")
              }}>Pokemon List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" onClick={function(){
                setActive("myPokemons")
              }}>My Pokemons</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        {active === "pokeList" && <Pokemons/>}
        {active === "myPokemons" && <MyPokemons/>}
      </div>
      
    </ApolloProvider>
  );
}

export default App;
