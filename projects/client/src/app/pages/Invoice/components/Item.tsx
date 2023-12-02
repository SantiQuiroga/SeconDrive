interface ItemProps {
  product: string;
  unitPrice: string;
  quantity: string;
  subTotal: string;
}

function Item({ product, unitPrice, quantity, subTotal }: ItemProps) {
  return (
    <div className='grid grid-cols-5 place-items-start font-ropa w-full'>
      <div className='border border-black w-full col-span-2 px-3'>
        {product}
      </div>
      <div className='border border-black w-full col-span-1 px-3'>
        {unitPrice}
      </div>
      <div className='border border-black w-full col-span-1 px-3'>
        {quantity}
      </div>
      <div className='border border-black w-full col-span-1 px-3'>
        {subTotal}
      </div>
    </div>
  );
}

export default Item;
