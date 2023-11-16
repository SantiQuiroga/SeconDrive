import { Route, Routes } from 'react-router-dom';

import Layout from './app/layouts/Layout';
import Home from './app/pages/home/Home';
import Search from './app/pages/search/Search';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:search' element={<Search />} />
      </Routes>
    </Layout>
  );
}

export default App;
