import './App.css';
import { Routes, Route } from 'react-router-dom'; 

import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import Navbar from './component/Navbar/navbar.component';

import { CartContext, useCart } from './component/cart/useCart'

function App() {
  const {data, operations} = useCart();

  return (
    <CartContext.Provider value={{ data, operations }}>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
