import { Route, Routes } from 'react-router-dom';

import Home from './app/pages/home/Home';
import Search from './app/pages/search/Search';
import Layout from './layouts/Layout';

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
