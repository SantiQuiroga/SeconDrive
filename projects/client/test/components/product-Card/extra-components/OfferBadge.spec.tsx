import { render } from '@testing-library/react';

import OfferBadge from '@/app/components/product-Card/components/OfferBadge';

test('renders OfferBadge with discount correctly', () => {
  const { getByText } = render(<OfferBadge discount={20} />);
  expect(getByText('20%')).toBeInTheDocument();
});

test('renders OfferBadge with single-digit discount correctly', () => {
  const { getByText } = render(<OfferBadge discount={5} />);
  expect(getByText('5%')).toBeInTheDocument();
});
