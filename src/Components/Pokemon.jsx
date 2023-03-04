import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import './Pokemoncard.css';
import { BiSearchAlt2 } from 'react-icons/bi';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState('');
    const [pokemonChoosen, setPokemonChoosen] = useState(false);
    const [pokemonData, setPokemonData] = useState({
        name: "",
        hp: "",
        image: "",
        attack: "",
        defense: "",
    });

    const SearchPokemon = async () => {
        const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await api.json();
        setPokemonData({
            name: data.name,
            hp: data.base_experience,
            ability1: data.abilities[0].ability.name,
            ability2: data.abilities[1].ability.name,
            image: data.sprites.front_default,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
        })
        console.log(data);
        // console.log(pokemonData);
        setPokemonChoosen(true);
    }

    return (
        <div className="container">
            <div className="wrapper">
                <div className='Pokemon-parent'>
                    <div className='Pokemon-search'>
                        <input style={{ textTransform: 'lowercase' }} type="text" name="pokemon" value={pokemon} id="pokemon" onChange={(e) => setPokemon(e.target.value)} />
                        <button className='search-btn' onClick={SearchPokemon}><BiSearchAlt2 /></button>
                    </div>
                    <PokemonCard
                        pokemonChoosen={pokemonChoosen} setPokemonChoosen={setPokemonChoosen}
                        pokemon={pokemon}
                        pokemonData={pokemonData} />
                </div>
            </div>
        </div>
    );
}

export default Pokemon;
