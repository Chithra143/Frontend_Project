import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (dishes) => {
    // Log the dish object being added to the cart for debugging purposes
    console.log('Adding dish to cart:', dishes);

    // Ensure the price is a valid number. If not, set it to 0
    let price = parseFloat(dishes.price);
    if (isNaN(price)) {
      console.log('Invalid price for item', dishes);
      price = 0; // Fallback to 0 if price is invalid
    }

    // Log the previous state of the cart before updating
    setCart((prevCart) => {
      console.log('Current Cart:', prevCart); // Log the current state of the cart
      return [...prevCart, { ...dishes, price }];
    });
  };

  // Calculate total amount ensuring no NaN in the price
  const totalAmount = cart.reduce((sum, item) => {
    // Log the price of each item before adding it to the sum
    const price = parseFloat(item.price);
    if (!isNaN(price)) {
      console.log('Item price:', price); // Log the valid price
      return sum + price;
    }
    return sum; // Skip if price is invalid
  }, 0);

  console.log('Total Amount:', totalAmount); // Log the total amount calculated

  return (
    <CartContext.Provider value={{ cart, addToCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
}
