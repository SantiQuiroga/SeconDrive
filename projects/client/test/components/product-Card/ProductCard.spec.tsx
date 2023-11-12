import { render } from '@testing-library/react';

import ProductCard from '@/components/product-Card/ProductCard';

test('renders ProductCard correctly', () => {
  const { getByText } = render(
    <ProductCard
      image='https://w7.pngwing.com/pngs/457/630/png-transparent-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-heart.png'
      price='29.99'
      discount={10}
      alt='Product Alt'
    >
      Product Name
    </ProductCard>
  );

  expect(getByText('Product Name')).toBeInTheDocument();
  expect(getByText('Price')).toBeInTheDocument();
  expect(getByText('$ 29.99')).toBeInTheDocument();
});

test('renders OfferBadge when discount is provided', () => {
  const { getByText } = render(
    <ProductCard
      image='https://w7.pngwing.com/pngs/457/630/png-transparent-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-heart.png'
      price='29.99'
      discount={15}
      alt='Product Alt'
    >
      Product Name
    </ProductCard>
  );

  expect(getByText('15% off')).toBeInTheDocument();
});

test('does not render OfferBadge when discount is 0', () => {
  const { queryByText } = render(
    <ProductCard
      image='https://w7.pngwing.com/pngs/457/630/png-transparent-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-heart.png'
      price='29.99'
      alt='Product Alt'
      discount={0}
    >
      Product Name
    </ProductCard>
  );

  expect(queryByText('15% off')).toBeNull();
});
