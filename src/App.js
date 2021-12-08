import { useState, useEffect } from 'react';
import './App.css';
import Pokemon from './Pokemon/Pokemon.js';

function App() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
      const pokemonData = await response.json();

      setPokemon(pokemonData.results);
      setLoading(false);
      await console.log(pokemon);
    };
    fetchdata();
  }, [loading]);

  return (
    <>
      <header>Pick a Pokemon =3</header>
      <main className="App">
        {loading && <span>...loading</span>}
        {!loading && pokemon.map((poke) => <Pokemon key={poke.id} {...poke} />)}
      </main>
      <footer>
        This app was built to practice building react apps and accessing data from API&apos;s
      </footer>
    </>
  );
}

export default App;
