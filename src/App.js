import { useState, useEffect } from 'react';
import './App.css';
import Pokemon from './Pokemon/Pokemon.js';
import fetchPokemon from './services/pokemon.js';

function App() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchdata = async () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const pokemonData = await fetchPokemon(query);
      setPokemon(pokemonData);
      setLoading(false);
    };
    if (loading) {
      fetchdata();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  function clickSearch() {
    setLoading(true);
  }

  return (
    <>
      <header>Pick a Pokemon =3</header>
      <div className="filter">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="all">All</option>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
        </select>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search for a Pokemon"
        ></input>
        <button onClick={clickSearch}>Search</button>
      </div>
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
