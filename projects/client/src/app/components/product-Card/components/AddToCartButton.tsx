import { useNavigate } from 'react-router-dom';

function AddToCartButton({ disabled }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <button
      type='button'
      className='flex items-center text-xl justify-center bg-white rounded w-full p-2 font-medium font-ropa'
      onClick={handleClick}
      disabled={disabled}
    >
      Add to Cart +
    </button>
  );
}

export default AddToCartButton;
