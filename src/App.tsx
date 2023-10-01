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
import ShoppingCartpage from './pages/ShoppingCartPage';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className='flex flex-col bg-[#e5e5e5] gap-2'>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Product" element={<ProductPage />}/>
        <Route path="/ShoppingCart" element={<ShoppingCartpage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
