import { render, screen } from '@testing-library/react';

import Home from '../../../src/pages/home/Home';

describe('Home', () => {
  it('renders the home page', () => {
    render(<Home />);
    const homePage = screen.getByText('Home Page');
    expect(homePage).toBeInTheDocument();
  });
});
