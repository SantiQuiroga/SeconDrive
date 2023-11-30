export {};

declare global {
  interface ProductCardProps {
    children: React.ReactNode;
    id: string;
    image: string;
    price: number;
    discount: number;
    alt: string;
    stock: number;
  }

  type CheckboxPriceProps = {
    valuePrice: string;
    checked: boolean;
    onToggle: () => void;
  };

  interface CartProductCardProps {
    children: React.ReactNode;
    id: string;
    image: string;
    price: number;
    discount: number;
    alt: string;
    stock: number;
    initialValue?: number;
    onQuantityChange: (id: string, quantity: number) => void;
  }

  interface ProductQuantity {
    id: string;
    quantity: number;
  }

  interface NumericInputProps {
    max: number;
    onChange: (value: number) => void;
    onError: (error: string) => void;
    initialValue?: number;
  }

  interface InputProps {
    children: React.ReactNode;
    regex?: RegExp;
    inputText?: string;
    className?: string;
    onChange: (value: string) => void;
  }

  interface DropDownProps {
    children: React.ReactNode;
    items: string[];
    regex?: RegExp;
    inputText?: string;
    className?: string;
    onSelect?: (selectedItem: string) => void;
    defaultItem: string;
  }
}
