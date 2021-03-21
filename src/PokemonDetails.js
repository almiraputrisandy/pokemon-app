import React from 'react';
import { Button } from 'react-bootstrap';

var caughtPokemons = []; //Initialise empty list of caught pokemons

function Probability(n){ //Random number generator
    return Math.floor(Math.random() * Math.floor(n));
};

function CatchPokemon(pokemon){ //Catch Pokemon function
    var chance = Probability(2); //Generate random number between 0 and 1 for the 50% chance of catching a pokemon
    var pokemonsList = JSON.parse(window.localStorage.getItem("myPokemons")); //Get list of caught pokemon
    var existingNicknames = [];
    pokemonsList.map(p => existingNicknames.push(p.nickname)); //Get all existing nicknames and put in an array

    if(chance==0){ //If Probability returns 0, pokemon is not caught 
        return alert("Oops, better luck next time!");
    } else{
        var promptNickname = prompt("Congratulations! You caught the Pokemon!\nGive it a nickname: ");
        if (promptNickname!=null && promptNickname!=""){
            if(existingNicknames.includes(promptNickname)){ //Check if nickname is already used
                alert("Nickname already used, please use another nickname");
            }else{
                pokemon.nickname = promptNickname; //Add nickname given by user to the pokemon info provided by API

                if(pokemonsList != null){ //Check if there is already an existing list of caught pokemons
                    pokemonsList.push(pokemon); //Add the newly caught pokemon to the list
                    window.localStorage.setItem('myPokemons', JSON.stringify(pokemonsList)); //Update list
                }else{
                    caughtPokemons.push(pokemon);
                    window.localStorage.setItem('myPokemons', JSON.stringify(caughtPokemons));
                }
            } 
        }
    }
};

function PokemonDetails(props){ //Component
    return(
        <div style={{ textAlign: 'center', padding: '3%', paddingTop: '0'}}>
            <h1>Pokemon Details</h1>
            <img src={props.pDetails.image} alt={props.pDetails.name}/>
            <p>Name: {props.pDetails.name}</p>
            <p>Types: {props.pDetails.types.map((t) => {
                return(
                    <span key={t.type.name}>{t.type.name}, </span>
                );
            })}</p>
            <p>Moves: {props.pDetails.moves.map((m) => {
                return(
                    <span key={m.move.name}>{m.move.name}, </span>
                );
            })}</p>
            <Button variant="primary" onClick={CatchPokemon.bind(this, props.pDetails)}>Catch Pokemon</Button>
        </div>
    );
};

export default PokemonDetails;