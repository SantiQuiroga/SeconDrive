import React from 'react';
import AddToCartButton from './extra-components/AddToCartButton';
import OffertBadge from './extra-components/OffertBadge';

interface ProductCardProps {
  children: React.ReactNode;
  image: string;
  price: string;
  discount: number;
}

function ProductCard({
  children,
  image,
  price,
  discount,
}: ProductCardProps) {
  return (
    <div className="relative w-[250px] text-black bg-[#DED9E1] p-5 rounded-lg ">
       <div className="relative">
        <img
          src={image}
          className="h-24 w-full object-cover"
        />
      </div>
      {discount > 0 && <OffertBadge discount={discount} />}

      <div className='py-2'>
        <label className="text-lg font-bold flex items-center justify-center">{children}</label>
        <div>
          <label className="flex w-full text-base">Price</label>
          <label className="flex w-full text-base">${price}</label>
        </div>
      </div>

      <AddToCartButton />
    </div>
  );
}

export default ProductCard;
