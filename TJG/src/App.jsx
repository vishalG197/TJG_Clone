// src/App.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';
import Navbar from './Componets/Navbar';
import AllRoutes from './Pages/AllRoutes';
import Footer from './Componets/Footer';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
