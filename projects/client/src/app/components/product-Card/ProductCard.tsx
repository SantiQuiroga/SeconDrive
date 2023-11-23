import AddToCartButton from './components/AddToCartButton';
import OfferBadge from './components/OfferBadge';

type ProductCardProps = {
  children: React.ReactNode;
  id: string;
  image: string;
  price: number;
  discount: number;
  alt: string;
};

function ProductCard({
  children,
  id,
  image,
  price,
  discount,
  alt,
}: ProductCardProps) {
  return (
    <a
      className='relative w-[230px] text-black bg-[#ded9e1] p-5 rounded-lg h-fit'
      href={`/product/${id}`}
    >
      <div className='relative bg-white rounded flex items-center justify-center h-24 overflow-hidden'>
        <img
          src={image}
          alt={alt}
          className='max-h-[95%] max-w-[95%] object-cover rounded'
        />
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
                <span className='line-through'>{Number(price).toFixed(2)}</span>
                <span className='ml-1 text-[#DC0700]'>
                  {Number(price - (price * discount) / 100).toFixed(2)}
                </span>
              </>
            ) : (
              Number(price).toFixed(2)
            )}
          </span>
        </div>
      </div>

      <AddToCartButton />
    </a>
  );
}

export default ProductCard;
