export default async function fetchPokemon(query, type, page) {
  const searchParameters = new URLSearchParams();
  searchParameters.set('pokemon', query);
  searchParameters.set('page', page);
  !(type === 'all') && searchParameters.append('type', type);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${searchParameters}`
  );
  const pokeData = await response;
  const pokemonData = await pokeData.json();
  return pokemonData;
}
