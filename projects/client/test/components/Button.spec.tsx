import { fireEvent, render } from '@testing-library/react';

import Button from '../../src/components/Button';

describe('Button', () => {
  it('renders the button with the correct text', () => {
    const buttonText = 'Click me!';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const button = getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me!</Button>
    );
    const button = getByText('Click me!');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('applies the correct className', () => {
    const className = 'bg-blue-500 text-white';
    const { getByText } = render(
      <Button className={className}>Click me!</Button>
    );
    const button = getByText('Click me!');
    expect(button).toHaveClass(className);
  });
});
