import { render } from '@testing-library/react';

import AddToCartButton from '@/components/product-Card/extra-components/AddToCartButton';

test('renders Add to Cart button correctly', () => {
  const { getByText } = render(<AddToCartButton />);
  expect(getByText('Add to Cart +')).toBeInTheDocument();
});

test('has the correct CSS classes and style', () => {
  const { container } = render(<AddToCartButton />);
  const button = container.querySelector('button');

  expect(button).toHaveClass(
    'flex items-center justify-center bg-white rounded w-full p-2 text-base font-medium'
  );
});
