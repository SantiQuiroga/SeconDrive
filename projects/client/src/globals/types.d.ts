export {};

declare global {
  type ProductCardProps = {
    children: React.ReactNode;
    id: string;
    image: string;
    price: number;
    discount: number;
    alt: string;
  };
}
