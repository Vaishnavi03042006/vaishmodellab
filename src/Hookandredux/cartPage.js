import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItem } from './cardAction';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [itemCount, setItemCount] = useState(1);

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      name: `New Item ${itemCount}`, 
      price: 100,
      quantity: 1,
    };
    dispatch(addItem(newItem));
    setItemCount(itemCount + 1);
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(updateItem({ ...item, quantity: item.quantity + 1 }));
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <button onClick={() => handleIncreaseQuantity(item)}>
              Increase Quantity
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default CartPage;
