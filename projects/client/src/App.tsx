import { Route, Routes } from 'react-router-dom';

import Layout from './app/layouts/Layout';
import CartPage from './app/pages/Cart/CartPage';
import Category from './app/pages/category/Category';
import Home from './app/pages/home/Home';
import ProductPage from './app/pages/product/Product';
import Search from './app/pages/search/Search';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:search' element={<Search />} />
        <Route path='/:category/:name' element={<Category />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
