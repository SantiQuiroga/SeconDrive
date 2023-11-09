import AddToCartButton from './extra-components/AddToCartButton';
import OfferBadge from './extra-components/OfferBadge';

function ProductCard({
  children,
  image,
  price,
  discount,
  alt,
}: ProductCardProps) {
  return (
    <div className='relative w-[230px] text-black bg-[#DED9E1] p-5 rounded-lg'>
      <div className='relative bg-white rounded flex items-center justify-center'>
        <img src={image} alt={alt} className='h-24 rounded object-cover' />
      </div>
      {discount > 0 && <OfferBadge discount={discount} />}

      <div className='py-2 font-ropa'>
        <p className='font-bold text-3xl flex items-center justify-center font-ropa'>
          {children}
        </p>
        <div>
          <span className='flex w-full text-base font-ropa'>Price</span>
          <span className='flex w-full text-base font-ropa'>$ {price}</span>
        </div>
      </div>

      <AddToCartButton />
    </div>
  );
}

export default ProductCard;
