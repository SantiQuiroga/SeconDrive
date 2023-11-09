interface DiscountBadgeProps {
  discount: number;
}

function OffertBadge({ discount }: DiscountBadgeProps) {
  return (
    <div className="absolute top-3 right-0 bg-red-500 text-white p-2">
      {discount}% off
    </div>
  );
}

export default OffertBadge;
