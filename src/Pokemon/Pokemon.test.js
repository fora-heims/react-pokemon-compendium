import { render } from '@testing-library/react';
import Pokemon from './Pokemon.js';

test('should render the blog card with title, subtitle, author and text', () => {
  const container = render(
    <Pokemon
      pokemon="considaw"
      hp="110"
      attack="20"
      defense="40"
      type_1="person"
      url_image="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png"
    />
  );
  expect(container).toMatchSnapshot();
});
