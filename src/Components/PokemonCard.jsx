import React from 'react';
import animation from '../assets/pokemon_bg-animation.png';

const PokemonCard = ({ setPokemonChoosen, pokemonChoosen, pokemonData }) => {
    return (
        <div className='pokemon-cards'>
            {
                !pokemonChoosen ?
                    <p>Enter A Pokemon Name</p> :
                    <div className='Pokemon-card'>
                        <div>
                            <h2>Name : {pokemonData.name}</h2>
                            <p>attack : {pokemonData.attack}</p>
                            <p>Defense : {pokemonData.defense}</p>
                            <p>HP : {pokemonData.hp}</p>
                            <div className="ability-parent">
                                <p className='ability'> {pokemonData.ability1}</p>
                                <p className='ability'> {pokemonData.ability2}</p>
                            </div>
                        </div>
                        <img src={pokemonData.image} alt="" />
                    </div>
            }
            <div className="pokemon-absolute">
                <img src={animation} alt="" />
            </div>
        </div>
    );
}

export default PokemonCard;