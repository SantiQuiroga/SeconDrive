import icon from '@/components/product-Card/assets/Motor.svg';

import ProductCard from './components/product-Card/ProductCard';

function App() {
  return (
    <ProductCard image={icon} discount={50} price='400' alt='Hola'>
      Engine
    </ProductCard>
  );
}

export default App;
