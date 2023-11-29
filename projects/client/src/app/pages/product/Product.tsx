import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUniqueProduct, ProductApi } from '@/api/productApi';

import CheckboxPrice from '../../components/checkbox-price/checkboxprice';

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductApi | undefined>(undefined);
  const [isAvailable, setIsAvailable] = useState(true);

  const [changePrice, setChangePrice] = useState(false);

  const [priceUsd, setPriceUsd] = useState(0);
  const [priceBol, setPriceBol] = useState(0);

  useEffect(() => {
    getUniqueProduct(id)
      .then((res: Response) => res.json())
      .then((data: ProductApi) => {
        if (data.stock < 1) setIsAvailable(false);
        setProduct(data);
        setPriceBol(data.price * 6.97);
        setPriceUsd(data.price);
      })
      .catch((err: Error) => {
        return err;
      });
  }, [id]);

  const toggleIsUsd = () => {
    setChangePrice(false);
  };

  const toggleIsBol = () => {
    setChangePrice(true);
  };

  if (!product)
    return (
      <div className='h-full w-full grid place-content-center'>
        <h2 className='text-4xl font-bold'>Product Not Found</h2>
      </div>
    );

  return (
    <div className='h-full w-full flex'>
      <div className='h-full w-1/2 grid place-content-center'>
        <img src={product.image} alt={product.name} height={336} width={472} />
      </div>
      {Number(product.discount) > 0 && (
        <div className='right-0 top-24 absolute text-center text-2xl px-5 py-7  font-bold bg-[#DC0700] text-white first-letter: font-ropa text-[55px]'>
          {product.discount}%
        </div>
      )}
      <div className='h-full w-1/2 flex flex-col gap-10 px-20 py-10 bg-[#ded9e1]'>
        <h2 className='w-full text-center text-[60px]'>{product.name}</h2>
        <div className='flex gap-32 items-center'>
          <CheckboxPrice
            valuePrice='USD'
            checked={!changePrice}
            onToggle={toggleIsUsd}
          />
          <CheckboxPrice
            valuePrice='BOL'
            checked={changePrice}
            onToggle={toggleIsBol}
          />
          <span className='text-[25px]'>Change 1 (USD) = 6,97 (Bs)</span>
        </div>
        <h3 className='text-[40px]'>Description:</h3>
        <p className='text-[30px]'>{product.description}</p>
        <h3 className='text-[40px]'>
          Brand:&nbsp;&nbsp;&nbsp;
          <span className='text-[30px]'>{product.brand}</span>
        </h3>
        <h3 className='text-[40px]'>
          Category:&nbsp;&nbsp;&nbsp;
          <span className='text-[30px]'>{product.category.name}</span>
        </h3>
        <h3 className='text-[40px]'>
          Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className='text-[35px]'>
            {!changePrice
              ? `[USD] ${(
                  priceUsd -
                  (priceUsd * Number(product.discount)) / 100
                ).toFixed(0)}`
              : `[BOL] ${(
                  priceBol -
                  (priceBol * Number(product.discount)) / 100
                ).toFixed(0)}`}
          </span>
        </h3>
        <button
          type='button'
          className='flex items-center text-[35px] justify-center bg-white rounded w-full p-4 font-medium font-ropa'
        >
          Add to Cart +
        </button>
        <h3 className='text-center text-[30px]'>
          {isAvailable ? 'Available' : 'Out of stock'}
        </h3>
      </div>
    </div>
  );
}

export default ProductPage;
