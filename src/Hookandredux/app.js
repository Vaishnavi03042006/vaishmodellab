import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import CartPage from './Hookandredux/cartPage';
import store from './Hookandredux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h1>Simple E-commerce App</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
          </nav>
          <Routes>
            <Route path="/" element={<h2>Welcome to the Store</h2>} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
