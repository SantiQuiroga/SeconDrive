import { useNavigate } from 'react-router-dom';

function AddToCartButton() {
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
    >
      Add to Cart +
    </button>
  );
}

export default AddToCartButton;
