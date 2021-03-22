import React from 'react';
import { useQuery } from '@apollo/client';
import  Pokemon  from './Pokemon';
import { GET_POKEMONS } from '../graphql/graphqlScript';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Pokemons() {
  const { loading, error, data } = useQuery(GET_POKEMONS); //Execute get pokemons list

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Container>
        <Row style={{ marginBottom: '5%' }}>
          {data.pokemons.results.map((currentPokemon) => ( //For every pokemon in the list
            <Col xs="12" md="6" style={{ padding: '2%' }} key={currentPokemon.url}>
              <Card>
                <Pokemon pokemon={currentPokemon}/> {/*Show Pokemon object*/}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
    </div>
  );

}

export default Pokemons;