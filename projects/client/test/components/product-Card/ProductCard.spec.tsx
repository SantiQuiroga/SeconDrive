import { render } from '@testing-library/react';

import ProductCard from '@/app/components/product-Card/ProductCard';

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
  expect(getByText('29.99')).toBeInTheDocument();
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

  expect(getByText('15%')).toBeInTheDocument();
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

  expect(queryByText('15%')).toBeNull();
});

test('renders the discount price when discount is provided', () => {
  const { getByText } = render(
    <ProductCard
      image='https://w7.pngwing.com/pngs/457/630/png-transparent-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-heart.png'
      price='29.99'
      alt='Product Alt'
      discount={10}
    >
      Product Name
    </ProductCard>
  );

  const originalPriceText = getByText('29.99');
  const discountedPriceText = getByText('26.99');

  expect(originalPriceText).toBeInTheDocument();
  expect(discountedPriceText).toBeInTheDocument();
  expect(originalPriceText).toHaveClass('line-through');
});

test('does not render the discount price when discount is provided', () => {
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

  const discountedPrice = (29.99 - 29.99 * 0.1).toFixed(2);
  expect(queryByText(discountedPrice)).toBeNull();
});
