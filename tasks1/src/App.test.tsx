import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import delay from "./service/delay";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test("testing delay function", () => {

});
