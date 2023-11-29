import { useState } from 'react';

import { getProductPageLink } from '@/globals/links';

import NumericInput from './components/NumericInput';
import OfferBadge from './components/OfferBadge';

function CartProductCard({
  children,
  id,
  image,
  price,
  discount,
  alt,
  stock,
  initialValue = 1,
}: CartProductCardProps) {
  const [stockMessage, setStockMessage] = useState<string>();
  const subtotal = Number(price).toFixed(2);
  const productPage = getProductPageLink(id);
  const spanStyles = 'flex w-full text-base font-ropa';

  const handleQuantityChange = () => {};

  const handleStockError = (error: string) => {
    setStockMessage(error);
  };

  const cutTitle = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength - 3)}...`;
  };

  return (
    <div className='relative w-[230px] text-black bg-[#ded9e1] px-5 py-2 h-fit'>
      <a
        className='relative bg-white rounded flex items-center justify-center h-24 overflow-hidden'
        href={productPage}
      >
        <img
          src={image}
          alt={alt}
          className='max-h-[95%] max-w-[95%] object-cover rounded'
        />
      </a>
      {discount > 0 && <OfferBadge discount={discount} />}
      <div className='py-2 font-ropa'>
        <a
          className='font-bold text-3xl flex items-center justify-center font-ropa text-center'
          href={productPage}
        >
          {cutTitle(children as string, 15)}
        </a>
        <div className='flex flex-row'>
          <span className={spanStyles}>
            <span>Price: [USD]</span>
            {discount > 0 ? (
              <>
                <span className='line-through'>{price.toFixed(2)}</span>
                <span className='ml-1 text-[#DC0700]'>
                  {(price - (price * discount) / 100).toFixed(2)}
                </span>
              </>
            ) : (
              Number(price).toFixed(2)
            )}
          </span>
        </div>

        <div>
          <div className='flex flex-row justify-between'>
            <span>Subtotal: {subtotal}</span>
            <NumericInput
              max={stock}
              onChange={handleQuantityChange}
              onError={handleStockError}
              initialValue={initialValue}
            />
          </div>
          <p className='text-[#DC0700] text-sm w-full text-center'>
            {stockMessage} &nbsp;
          </p>
          <button
            type='button'
            className='flex items-center text-xl justify-center bg-white w-full p-2 font-medium font-ropa'
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
