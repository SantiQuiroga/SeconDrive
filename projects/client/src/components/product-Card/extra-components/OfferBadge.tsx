function OfferBadge({ discount }: DiscountBadgeProps) {
  return (
    <div className='absolute top-4 text-xl font-bold right-0 bg-red-500 text-white p-1 font-ropa'>
      {discount}% off
    </div>
  );
}

export default OfferBadge;
