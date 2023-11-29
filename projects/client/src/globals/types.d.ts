export {};

declare global {
  interface ProductCardProps {
    children: React.ReactNode;
    id: string;
    image: string;
    price: number;
    discount: number;
    alt: string;
  }
  interface CartProductCardProps {
    children: React.ReactNode;
    id: string;
    image: string;
    price: number;
    discount: number;
    alt: string;
    stock: number;
    initialValue?: number;
  }

  interface NumericInputProps {
    max: number;
    onChange: (value: number) => void;
    onError: (error: string) => void;
    initialValue?: number;
  }
}
