export async function fetchPokemon(query, type, page, direction) {
  const searchParameters = new URLSearchParams();

  searchParameters.set('pokemon', query);
  searchParameters.set('page', page);
  searchParameters.set('sort', 'pokemon');
  searchParameters.set('direction', direction);

  !(type === 'all') && searchParameters.set('type', type);

  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${searchParameters}`
  );

  const pokeData = await response;
  const pokemonData = await pokeData.json();

  return pokemonData;
}

export async function fetchType() {
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);

  const pokeData = await response;
  const pokemonData = await pokeData.json();

  return pokemonData;
}
