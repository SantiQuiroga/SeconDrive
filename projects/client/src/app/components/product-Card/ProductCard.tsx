import { useNavigate } from 'react-router-dom';

import AddToCartButton from './components/AddToCartButton';
import OfferBadge from './components/OfferBadge';

type Props = {
  children: React.ReactNode;
  id: string;
  image: string;
  price: number;
  discount: number;
  alt: string;
  className?: string;
};

const defaultProps = {
  className: '',
};

function ProductCard({
  children,
  id,
  image,
  price,
  discount,
  alt,
  className,
}: Props) {
  const navigate = useNavigate();

  return (
    <button
      type='button'
      className={`${className} relative w-[230px] text-black bg-[#ded9e1] p-5 rounded-lg h-fit`}
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <div className='relative bg-white rounded flex items-center justify-center'>
        <img src={image} alt={alt} className='h-24 rounded object-cover' />
      </div>
      {discount > 0 && <OfferBadge discount={discount} />}
      <div className='py-2 font-ropa'>
        <p className='font-bold text-3xl flex items-center justify-center font-ropa text-center'>
          {children}
        </p>
        <div>
          <span className='flex w-full text-base font-ropa'>Price:</span>
          <span className='flex w-full text-base font-ropa'>
            <span>[USD]&nbsp;</span>{' '}
            {discount > 0 ? (
              <>
                <span className='line-through'>{Number(price).toFixed(0)}</span>
                <span className='ml-1 text-[#DC0700]'>
                  {Number(price - (price * discount) / 100).toFixed(0)}
                </span>
              </>
            ) : (
              Number(price).toFixed(0)
            )}
          </span>
        </div>
      </div>

      <AddToCartButton />
    </button>
  );
}

ProductCard.defaultProps = defaultProps;

export default ProductCard;
