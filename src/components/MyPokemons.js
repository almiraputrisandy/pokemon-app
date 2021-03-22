import React, {useState} from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

function MyPokemons(){
    var [myPokemonsList, setList] = useState([]);
    //Get list of caught Pokemons
    myPokemonsList = JSON.parse(window.localStorage.getItem("myPokemons"));

    function ReleasePokemon(index){
        var confirm = window.confirm("Are you sure you want to release this Pokemon?");
        if(confirm){
            myPokemonsList.splice(index, 1); //Remove selected pokemon
            setList(myPokemonsList => [...myPokemonsList]); //Refresh content
            window.localStorage.setItem("myPokemons", JSON.stringify(myPokemonsList));
        }
    }

    if (myPokemonsList.length!=0){ //If list is not empty return list
        return(
            <div>
                <Container style={{marginTop: '5%'}}>
                    <Row style={{marginBottom: '5%'}}>
                        {myPokemonsList.map((mp, index) => (
                            <Col xs="12" md="6" style={{padding: '2%'}} key={mp.nickname}>
                                <Card>
                                    <div style={{ textAlign: 'center', padding: '3%', paddingTop: '0'}}>
                                        <h1>{mp.name}</h1>
                                        <img src={mp.image} alt={mp.name}/>
                                        <p>Nickname: {mp.nickname}</p>
                                        <Button variant="primary" onClick={ReleasePokemon.bind(this, index)}>Release Pokemon</Button>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }else{
        return (
            <div>
                <Container style={{marginTop: '5%'}}>
                    <Row style={{marginBottom: '5%'}}>
                        <Col xs="12" md="12" style={{padding: '2%', textAlign: 'center'}}>
                            <p>No pokemons caught yet:(</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default MyPokemons;