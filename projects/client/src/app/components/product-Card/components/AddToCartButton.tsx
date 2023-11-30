import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  disabled: boolean;
}
function AddToCartButton({ disabled }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    navigate('/cart');
  };

  return (
    <button
      type='button'
      className='flex items-center text-xl justify-center bg-white rounded w-full p-2 font-medium font-ropa'
      onClick={handleClick}
      disabled={disabled}
    >
      {disabled ? 'Add to cart +' : 'Out of stock'}
    </button>
  );
}

export default AddToCartButton;
