import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Category, getAllCategories } from 'src/app/api/CategoryAPI';
import CheckboxPrice from 'src/app/components/price-checkbox/PriceCheckbox';

import { getAllProducts, ProductApi } from '@/api/productApi';

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductApi | undefined>(undefined);
  const [categoryList, setCategories] = useState<Category[] | undefined>(
    undefined
  );
  const [isAvailable, setIsAvailable] = useState(true);

  const [changePrice, setChangePrice] = useState(false);

  const [price, setPrice] = useState(0);

  useEffect(() => {
    getAllProducts()
      .then((res: Response) => res.json())
      .then((data: ProductApi[]) => {
        setProduct(data.find(item => item.id === Number(id)) as ProductApi);
        if (Number(data.find(item => item.id === Number(id))?.stock === 0))
          setIsAvailable(false);
        setPrice(Number(data.find(item => item.id === Number(id))?.price));
      })
      .catch((err: Error) => {
        return err;
      });
  }, [id]);

  useEffect(() => {
    getAllCategories()
      .then((res: Response) => res.json())
      .then((data: Category[]) => {
        setCategories(data);
      })
      .catch((err: Error) => {
        return err;
      });
  }, []);

  const toggleIsUsd = () => {
    setChangePrice(false);
    if (changePrice) {
      setPrice(price / 6.97);
    }
  };

  const toggleIsBol = () => {
    setChangePrice(true);
    if (!changePrice) {
      setPrice(price * 6.97);
    }
  };

  if (!product)
    return (
      <div className='h-full w-full grid place-content-center'>
        <h2 className='text-4xl font-bold'>Product Not Found</h2>
      </div>
    );

  return (
    <div className='w-full flex'>
      <div className='w-1/2 grid place-content-center'>
        <img src={product.image} alt={product.name} height={300} width={472} />
      </div>
      {Number(product.discount) > 0 && (
        <div className='right-0 top-24 absolute text-2xl px-5 py-7  font-bold bg-[#DC0700] text-white first-letter: font-ropa text-[55px]'>
          {product.discount}%
        </div>
      )}
      <div className='w-1/2 flex flex-col gap-8 px-20 py-10 bg-[#ded9e1] text-[40px]'>
        <h2 className='text-center text-[60px]'>{product.name}</h2>
        <div className='flex gap-32'>
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
        <h3>Description:</h3>
        <p className='text-[30px]'>{product.description}</p>
        <h3>
          Brand:&nbsp;&nbsp;&nbsp;
          <span className='text-[30px]'>{product.brand}</span>
        </h3>
        <h3>
          Category:&nbsp;&nbsp;&nbsp;
          <span className='text-[30px]'>
            {categoryList?.find(item => item.id === Number(product.id))?.name}
          </span>
        </h3>
        <h3>
          Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {!changePrice ? `[USD]` : `[BOL]`}&nbsp;
          {product.discount > 0 ? (
            <>
              <span className='line-through text-[35px]'>
                {price.toFixed(2)}
              </span>
              <span className='text-red-600'>
                &nbsp;{(price - (price * product.discount) / 100).toFixed(2)}
              </span>
            </>
          ) : (
            price.toFixed(2)
          )}
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
