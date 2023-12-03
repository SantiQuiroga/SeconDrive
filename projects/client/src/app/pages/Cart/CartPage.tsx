import { useEffect, useState } from 'react';

import CartProductCard from '@/app/components/product-Card/CartProductCard';
import cartStore from '@/app/store/cartStore';

function CartPage() {
  const { items } = cartStore.getState();
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    setProducts(items);
  }, [items]);

  const handleRemove = (id: number) => {
    cartStore.getState().removeItem(id);
    setProducts(state => state.filter(item => item.id !== id));
  };

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
    </div>
  );
}
export default CartPage;
