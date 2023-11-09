export {};

declare global {
  interface ProductCardProps {
    children: React.ReactNode;
    image: string;
    price: string;
    discount: number;
    alt: string;
  }

  interface DiscountBadgeProps {
    discount: number;
  }
}
