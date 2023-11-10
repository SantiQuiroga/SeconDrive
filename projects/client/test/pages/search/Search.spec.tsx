import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import Search from '@/pages/search/Search';

describe('Search component', () => {
  it('renders search parameter correctly', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/search/test']}>
        <Routes>
          <Route path='/search/:search' element={<Search />} />
        </Routes>
      </MemoryRouter>
    );

    const searchElement = getByText('test');
    expect(searchElement).toBeInTheDocument();
  });
});
