import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_POKEMON_DETAILS } from '../graphql/graphqlScript';
import { Button } from 'react-bootstrap';
import PokemonDetails from './PokemonDetails';

var details, ownedTotal;

function Pokemon(props){
    //Lazy Query to execute only after "See Pokemon Details" button is clicked
    const [getDetails, { loading, error, data }] = useLazyQuery(GET_POKEMON_DETAILS, {variables:{"name":props.pokemon.name}});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (data){
        details = JSON.parse(JSON.stringify(data.pokemon));
        details.image = props.pokemon.image;
        return(
            <PokemonDetails pDetails={details} key={details.id}/>
        );
    }

    var pokemonsList = JSON.parse(window.localStorage.getItem("myPokemons")); //Get list of caught pokemon
    if (pokemonsList!=null){
        ownedTotal = pokemonsList.filter(n => n.name === props.pokemon.name).length; //Count total of owned pokemons
    }else{
        ownedTotal = 0;
    }
    

    return(
        <div key={props.pokemon.name} style={{ textAlign: 'center', padding: '3%', paddingTop: '0'}}>
            <h1>
                {props.pokemon.name} 
            </h1>
            <p>
                Owned Total: {ownedTotal}
                <br/>
                <img src={props.pokemon.image} alt="pokemon"></img>
            </p>
            <Button variant="primary" onClick={() => getDetails()}>See Pokemon Details</Button>
        </div>
    );
};
export default Pokemon;