import React from 'react';

const Card = ({ pokemonCards, onloading }) => {
    return (
        <div className='card-parent'>
            {
            !onloading ? <>Loading Pokedex</> :
                pokemonCards.map((items, id) => {
                    return <div className='card' key={id}>
                        <div className="card-data">
                            <p>#{items.id.toString().padStart(3, '0')}</p>
                            <p>{items.name}</p>
                        </div>
                        <img src={items.sprites.front_default} alt={items.name} />

                    </div>
                })}
        </div>
    );
}

export default Card;
