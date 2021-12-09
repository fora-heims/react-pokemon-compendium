import { useState, useEffect } from 'react';
import './App.css';
import Pokemon from './Pokemon/Pokemon.js';
import fetchPokemon from './services/pokemon.js';
import { Button, TextField, Select, MenuItem } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState('all');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchdata = async () => {
      const pokemonData = await fetchPokemon(query, type, page);

      setPokemon(pokemonData.results);
      setLoading(false);
    };
    if (loading) {
      fetchdata();
    }
  }, [loading, query, type, page]);

  function clickSearch() {
    setLoading(true);
    setPage(1);
  }

  function handleNext() {
    setPage((prev) => ++prev);
    setLoading(true);
  }

  function handlePrev() {
    setPage((prev) => --prev);
    setLoading(true);
  }

  return (
    <>
      <header>Pick a Pokemon =3</header>
      <div className="filter">
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="bug">Bug</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
          <MenuItem value="dragon">Dragon</MenuItem>
          <MenuItem value="electric">Electric</MenuItem>
          <MenuItem value="fairy">Fairy</MenuItem>
          <MenuItem value="fighting">Fighting</MenuItem>
          <MenuItem value="fire">Fire</MenuItem>
          <MenuItem value="flying">Flying</MenuItem>
          <MenuItem value="ghost">Ghost</MenuItem>
          <MenuItem value="grass">Grass</MenuItem>
          <MenuItem value="ground">Ground</MenuItem>
          <MenuItem value="ice">Ice</MenuItem>
          <MenuItem value="normal">Normal</MenuItem>
          <MenuItem value="poison">Poison</MenuItem>
          <MenuItem value="psychic">Psychic</MenuItem>
          <MenuItem value="rock">Rock</MenuItem>
          <MenuItem value="steel">Steel</MenuItem>
          <MenuItem value="water">Water</MenuItem>
        </Select>
        <TextField
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search for a Pokemon"
        ></TextField>
        <Button variant="contained" onClick={clickSearch}>
          Search
        </Button>
      </div>
      <main className="App">
        {loading && <span>...loading</span>}
        {!loading && pokemon.map((poke) => <Pokemon key={poke.id} {...poke} />)}
      </main>
      <div className="box">
        <span>Page: {page}</span>
        <button onClick={handlePrev} className="prev">
          Previous Page
        </button>
        <button onClick={handleNext} className="next">
          Next Page
        </button>
      </div>

      <footer>
        This app was built to practice building react apps and accessing data from API&apos;s
      </footer>
    </>
  );
}

export default App;
