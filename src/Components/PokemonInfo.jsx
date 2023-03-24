import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';

const PokemonInfo = () => {
    const [pokemonCards, setPokemonCards] = useState([]);
    const [pokemon, setPokemon] = useState();
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/?limit=120&offset=0`)
    const [onloading, setoading] = useState(false);


    const pokemonFunction = async () => {
        setoading(true);
        const api = await fetch(url);
        const res = await api.json();
        getPokemon(res.results)
    }

    const getPokemon = async (res) => {
        res.map(async (e) => {
            const result = await fetch(e.url)
            const resultnext = await result.json();
            setPokemonCards(state => {
                state = [...state, resultnext]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            })
            console.log(pokemonCards)
        })
    }


    window.addEventListener('load', pokemonFunction)

    return (
        <div className="container">
            <div className="wrapper">
                <div className='Pokemon-Scroll'>
                    <div className='Pokemon-info-card'>

                        <Card onloading={onloading} pokemonCards={pokemonCards} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PokemonInfo;
