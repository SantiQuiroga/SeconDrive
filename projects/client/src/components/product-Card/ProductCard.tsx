import AddToCartButton from './extra-components/AddToCartButton';
import OfferBadge from './extra-components/OfferBadge';

function ProductCard({
  children,
  image,
  price,
  discount,
  alt,
}: ProductCardProps) {
  const discountedPrice = Number(price) - Number(price) * (discount / 100);
  return (
    <div className='relative w-[230px] text-black bg-[rgb(222,217,225)] p-5 rounded-lg'>
      <div className='relative bg-white rounded flex items-center justify-center h-24 overflow-hidden'>
        <img
          src={image}
          alt={alt}
          className='max-h-24 w-max-full object-cover rounded'
        />
      </div>
      {discount > 0 && <OfferBadge discount={discount} />}

      <div className='py-2 font-ropa'>
        <p className='font-bold text-3xl flex items-center justify-center font-ropa'>
          {children}
        </p>
        <div className='text-lg'>
          <span className='flex w-full font-ropa'>Price</span>
          <div className='flex justify-start'>
            <span>[USD]</span>
            <span
              className={`flex font-ropa ml-1 ${
                discount > 0 ? 'line-through' : ''
              }`}
            >
              {price}
            </span>
            {discount > 0 && (
              <span className='font-ropa text-[#DC0700] ml-1'>
                {discountedPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>

      <AddToCartButton />
    </div>
  );
}

export default ProductCard;
