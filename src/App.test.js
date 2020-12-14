import { render, screen } from '@testing-library/react';
import App from './App';

test('Render catalog of pokemons text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Catalog of pokemons/i);
  expect(linkElement).toBeInTheDocument();
});
