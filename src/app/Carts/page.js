'use client'
import React from 'react';
import { useState } from 'react';
const Cart = ({ cartProducts,total }) => {
  
  let quantity=1;
  return (
    <div>
      <h2>Shopping Cart</h2>
      <h4>Total Payment: {total }</h4>
      <ul>
        {cartProducts.map((product, index) => (
          <li key={index}>
            
            {product.name} - ${product.price*quantity} 
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
