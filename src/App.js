import { useState, useEffect } from 'react';
import './App.css';
import Pokemon from './Pokemon/Pokemon.js';
import { fetchPokemon, fetchType } from './services/pokemon.js';
import { Button, TextField, Select, MenuItem } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState('all');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState('asc');
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const pokemonData = await fetchPokemon(query, type, page, direction);

      setPokemon(pokemonData.results);
      setLoading(false);
    };
    if (loading) {
      fetchdata();
    }
  }, [loading, query, type, page, direction]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await fetchType();
      const typ = await pokemonData.map((ty) => ty.type);
      setTypes(typ);
    };
    fetchData();
  }, []);

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

  function handleSelector(e) {
    setPage(1);
    setLoading(true);
    setType(e.target.value);
  }

  function handleDesc() {
    setPage(1);
    setDirection('desc');
    setLoading(true);
  }

  function handleAsc() {
    setPage(1);
    setDirection('asc');
    setLoading(true);
  }

  return (
    <>
      <header>Pokemon Compendium</header>
      <div className="filter">
        <Select value={type} onChange={handleSelector}>
          <MenuItem value="all">All</MenuItem>
          {types.map((ty) => (
            <MenuItem key={ty} value={ty}>
              {ty}
            </MenuItem>
          ))}
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
        <Button variant="contained" onClick={handleAsc}>
          Ascending
        </Button>
        <Button variant="contained" onClick={handleDesc}>
          Descending
        </Button>
      </div>
      <main className="App">
        {loading && <span>...loading</span>}
        {!loading && pokemon.map((poke) => <Pokemon key={poke.id} {...poke} />)}
      </main>
      <div className="box">
        <span>Page: {page}</span>
        {page !== 1 && (
          <Button variant="contained" onClick={handlePrev} className="prev">
            Previous Page
          </Button>
        )}
        {pokemon.length === 20 && (
          <Button variant="contained" onClick={handleNext} className="next">
            Next Page
          </Button>
        )}
      </div>

      <footer>
        This app was built to practice building react apps and accessing data from API&apos;s
      </footer>
    </>
  );
}

export default App;
