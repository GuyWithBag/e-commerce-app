import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import NavBar from './features/navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Footer from './features/pageFooter';
import ShoppingCartPage from './pages/ShoppingCartPage';
import WishListPage from './pages/WishListPage';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'; 

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className='flex flex-col bg-[#e5e5e5] gap-2'>
      <NavBar />
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/products" element={<HomePage  />} />
          <Route path="/products/:productID" element={<ProductPage />} />
          <Route path="/products:productID" element={<ProductPage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />}/>
          <Route path="/wish-list" element={<WishListPage />}/>
        </Routes>
      </QueryParamProvider>
      <Footer />
    </div>
  );
}

export default App;
