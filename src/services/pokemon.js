export default async function fetchPokemon(query) {
  const searchParameters = new URLSearchParams();
  searchParameters.set('pokemon', query);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${searchParameters}`
  );
  const pokeData = await response;
  const pokemonData = await pokeData.json();
  return pokemonData.results;
}
