import { Route, Routes } from 'react-router-dom';

import Layout from '@/layouts/Layout';
import Home from '@/pages/home/Home';
import Search from '@/pages/search/Search';

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
