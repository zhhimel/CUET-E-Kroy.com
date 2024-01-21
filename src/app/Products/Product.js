'use client';
import { useState } from 'react';
import React from 'react';
import products from './products.json';
import Cart from '../Carts/page';


const Product = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [total,setTotal]=useState(0);

  const addToCart = (product) => {
    
    setCartProducts((prevCartProducts) => [...prevCartProducts, product]);
  };
  return (
    <div>
      <div className="row">
      {products.map((product, index) => (
        <div className="col-sm-6 col-lg-4" key={index}>
          <div className="box">
            <div className="img-box">
              <img src="images/khata.jpg" alt="" />
              <button className="add_cart_btn" onClick={() => addToCart(product)}>
                <span onClick={(e)=>{setTotal(total+product.price)}}>Add To Cart</span>
              </button>
            </div>
            <div className="detail-box">
              <h5>{product.name}</h5>
              <div className="product_info">
                <h5>
                  <span>Tk.</span> {product.price}
                </h5>
                <div className="star_container">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <Cart cartProducts={cartProducts} total={total} />
    </div>
    
  );
};

export default Product;
