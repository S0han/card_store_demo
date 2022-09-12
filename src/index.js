import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </BrowserRouter>,
  document.getElementById('root')
);


