import './App.css';
import React from 'react';
import Pokemon from './Components/Pokemon';
import PokemonInfo from './Components/PokemonInfo';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Pokemon />
      <PokemonInfo />
    </div>
  );
}

export default App;
