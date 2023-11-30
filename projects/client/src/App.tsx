import { Route, Routes } from 'react-router-dom';

import Layout from './app/layouts/Layout';
import CartPage from './app/pages/Cart/CartPage';
import Category from './app/pages/category/Category';
import Home from './app/pages/home/Home';
import Login from './app/pages/login/Login';
import ProductPage from './app/pages/product/Product';
import Search from './app/pages/search/Search';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/search/:search' element={<Search />} />
        <Route path='/:category/:name' element={<Category />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
