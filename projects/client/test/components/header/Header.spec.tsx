import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';

import Header from '@/components/header/Header';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe('Header', () => {
  it('handles input focus and blur', () => {
    render(<Header />);
    const inputElement = screen.getByPlaceholderText('Search...');

    fireEvent.focus(inputElement);
    expect(inputElement).toHaveClass('bg-transparent outline-none');

    fireEvent.blur(inputElement);
    expect(inputElement).toHaveClass('bg-transparent outline-none');
  });

  it('handles Enter key press', () => {
    render(<Header />);
    const inputElement = screen.getByPlaceholderText('Search...');

    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.keyDown(inputElement, { key: 'Enter' });

    const searchButton = screen.getByTestId('search-button');
    expect(searchButton.onclick).toBeInstanceOf(Function);
    expect(searchButton).toHaveProperty('onclick');
  });

  it('handles button click', async () => {
    render(<Header />);
    const inputElement = screen.getByPlaceholderText('Search...');
    const buttonElement = screen.getByTestId('search-button');

    fireEvent.change(inputElement, { target: { value: 'test' } });
    await userEvent.click(buttonElement);

    const searchButton = screen.getByTestId('search-button');
    expect(searchButton).toHaveProperty('onclick');
  });

  it('navigates on Enter key press', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    render(<Header />);
    const inputElement = screen.getByPlaceholderText('Search...');

    fireEvent.change(inputElement, { target: { value: '' } });
    fireEvent.keyDown(inputElement, { key: 'Enter' });

    expect(navigateMock).not.toHaveBeenCalled();
  });

  it('focuses on input when the button is clicked with empty search value', () => {
    render(<Header />);

    const inputElement = screen.getByPlaceholderText('Search...');
    const buttonElement = screen.getByTestId('search-button');

    fireEvent.click(buttonElement);

    expect(document.activeElement).toBe(inputElement);
  });
});
