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
import SearchResults from './features/searchResults';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className='flex flex-col gap-2'>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/products" element={<HomePage  />} />
          <Route path="/products/:productID" element={<ProductPage />} />
          <Route path="/products:productID" element={<ProductPage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />}/>
          <Route path="/wish-list" element={<WishListPage />}/>
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </QueryParamProvider>
      <Footer />
    </div>
  );
}

export default App;
