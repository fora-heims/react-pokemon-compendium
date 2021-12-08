export default async function fetchPokemon(query, type) {
  const searchParameters = new URLSearchParams();
  searchParameters.set('pokemon', query);
  !(type === 'all') && searchParameters.append('type', type);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${searchParameters}`
  );
  const pokeData = await response;
  const pokemonData = await pokeData.json();
  return pokemonData.results;
}
