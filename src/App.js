import './App.css';
import { Routes, Route } from 'react-router-dom'; 

import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';

import Navbar from './component/Navbar/navbar.component';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/checkout' component={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
