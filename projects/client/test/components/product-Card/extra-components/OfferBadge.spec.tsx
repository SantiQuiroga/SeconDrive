import { render } from '@testing-library/react';

import OfferBadge from '@/components/product-Card/extra-components/OfferBadge';

test('renders OfferBadge with discount correctly', () => {
  const { getByText } = render(<OfferBadge discount={20} />);
  expect(getByText('20% off')).toBeInTheDocument();
});
