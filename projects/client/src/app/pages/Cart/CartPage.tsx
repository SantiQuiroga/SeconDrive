import { useEffect, useState } from 'react';

import {
  CartProduct,
  getAllCartProductsByCartId,
  getCartTotalPriceByCartId,
} from '@/api/cartProductApi';
import CartProductCard from '@/app/components/product-Card/CartProductCard';
import cartStore from '@/app/store/cartStore';

import CheckboxPrice from '../../components/checkbox-price/checkboxprice';
import CardImage from './assets/card.png';

import { useEffect, useState } from 'react';

import {
  CartProduct,
  getAllCartProductsByCartId,
  getCartTotalPriceByCartId,
} from '@/api/cartProductApi';

import CheckboxPrice from '../../components/checkbox-price/checkboxprice';
import CardImage from './assets/card.png';

function CartPage() {
  const [price, setPrice] = useState(0);
  const [totalItems, setItems] = useState(0);
  const [cartProductList, setCartProductList] = useState<CartProduct[]>([]);
  const [changePrice, setChangePrice] = useState(false);
  const [estimatedTax, setEstimatedTax] = useState(7);
  const costShipping = 10;

  const toggleIsUsd = () => {
    setChangePrice(false);
    if (changePrice) {
      setPrice(price / 6.97);
      setEstimatedTax(estimatedTax / 6.97);
    }
  };

  const toggleIsBol = () => {
    setChangePrice(true);
    if (!changePrice) {
      setPrice(price * 6.97);
      setEstimatedTax(estimatedTax * 6.97);
    }
  };

  useEffect(() => {
    getAllCartProductsByCartId('1')
      .then((res: Response) => res.json())
      .then((data: CartProduct[]) => {
        setCartProductList(data);
      })
      .catch((err: Error) => {
        return err;
      });

    getCartTotalPriceByCartId('1')
      .then((res: Response) => res.json())
      .then((data: number) => {
        setPrice(data);
      })
      .catch((err: Error) => {
        return err;
      });
    const items = cartProductList.reduce(
      (total, cartProduct) => total + cartProduct.quantity,
      0
    );
    setItems(items);
  }, [cartProductList]);
  //-----
  const { items } = cartStore.getState();
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    setProducts(items);
  }, [items]);

  const handleRemove = (id: number) => {
    cartStore.getState().removeItem(id);
    setProducts(state => state.filter(item => item.id !== id));
  };

  const [price, setPrice] = useState(0);
  const [totalItems, setItems] = useState(0);
  const [cartProductList, setCartProductList] = useState<CartProduct[]>([]);
  const [changePrice, setChangePrice] = useState(false);
  const [estimatedTax, setEstimatedTax] = useState(7);
  const costShipping = 10;

  const toggleIsUsd = () => {
    setChangePrice(false);
    if (changePrice) {
      setPrice(price / 6.97);
      setEstimatedTax(estimatedTax / 6.97);
    }
  };

  const toggleIsBol = () => {
    setChangePrice(true);
    if (!changePrice) {
      setPrice(price * 6.97);
      setEstimatedTax(estimatedTax * 6.97);
    }
  };

  useEffect(() => {
    getAllCartProductsByCartId('1')
      .then((res: Response) => res.json())
      .then((data: CartProduct[]) => {
        setCartProductList(data);
      })
      .catch((err: Error) => {
        return err;
      });

    getCartTotalPriceByCartId('1')
      .then((res: Response) => res.json())
      .then((data: number) => {
        setPrice(data);
      })
      .catch((err: Error) => {
        return err;
      });
    const items = cartProductList.reduce(
      (total, cartProduct) => total + cartProduct.quantity,
      0
    );
    setItems(items);
  }, [cartProductList]);

  return (
    <div className='w-full h-full py-10 px-32 flex flex-col gap-10'>
      <h1 className='text-7xl font-medium w-full mx-auto text-center'>
        My Cart
      </h1>
      <div className='flex w-full gap-10'>
        <div className='w-3/5 flex flex-col gap-10'>
          <h2 className='text-5xl font-medium'>Items:</h2>
          <div className='w-full h-fit grid grid-cols-3 gap-14'>
            {products.map(item => {
              return (
                <CartProductCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  discount={item.discount}
                  alt={item.title}
                  stock={item.stock}
                  remove={() => {
                    handleRemove(item.id);
                  }}
                  initialValue={item.quantity}
                >
                  {item.title}
                </CartProductCard>
              );
            })}
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <h1>Cart Page</h1>
        <p>Coming soon...</p>
        <div className='gap-10 flex-col flex text-black border border-black p-10 rounded-lg'>
          <h3 className='text-[35px] text-center'>Shipping Details</h3>
          <div className='flex gap-32 px-40 items-center'>
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
          </div>
          <h3 className='text-[35px]'>Order Summary</h3>
          <div className='flex justify-between text-[25px]'>
            Items:
            <span> {totalItems} </span>
          </div>
          <div className='flex justify-between text-[25px]'>
            Shipping and Handling:
            <span>
              {changePrice
                ? `${(Number(costShipping) * 6, 97).toFixed(2)} [BOL]`
                : `${Number(costShipping).toFixed(2)} [USD]`}
            </span>
          </div>
          <hr className='border-black border' />
          <div className='flex justify-between text-[25px]'>
            Total Before Tax:
            <span>{price}</span>
          </div>
          <div className='flex justify-between text-[25px]'>
            Estimated Tax:
            <span>{estimatedTax}</span>
          </div>
          <hr className='border-black border' />
          <div className='flex justify-between text-[35px]'>
            Total:
            <span>{price + estimatedTax}</span>
          </div>
          <button
            type='button'
            className='flex justify-center bg-yellow-400 py-2 text-[40px] font-black'
          >
            PAY&nbsp;&nbsp;&nbsp;
            <img src={CardImage} alt='card' width={55} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
