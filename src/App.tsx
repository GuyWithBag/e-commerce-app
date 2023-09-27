import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import NavBar from './features/navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className=' bg-[#e5e5e5]'>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Product" element={<ProductPage />}/>
      </Routes>
    </div>
  );
}

export default App;
