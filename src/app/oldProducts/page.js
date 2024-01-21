'use client'
import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import Link from 'next/link';
const page = () => {
  return (
    <div>
      <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Old Products</h2>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link href="/Products">New Products</Link>
            <button>Foods</button>
            <button>Accessories</button>
          </Dropdown.Menu>
        </Dropdown>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="box">
              <div className="img-box">
                <img src="images/khata.jpg" alt="" />
                <a href="" className="add_cart_btn">
                  <span>Add To Cart</span>
                </a>
              </div>
              <div className="detail-box">
                <h5>Khata</h5>
                <div className="product_info">
                  <h5>
                    <span>Tk.</span> 60
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
          <div className="col-sm-6 col-lg-4">
            <div className="box">
              <div className="img-box">
                <img src="images/pen.jpeg" alt="" />
                <a href="" className="add_cart_btn">
                  <span>Add To Cart</span>
                </a>
              </div>
              <div className="detail-box">
                <h5>Pen</h5>
                <div className="product_info">
                  <h5>
                    <span>TK.</span> 10
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
          <div className="col-sm-6 col-lg-4">
            <div className="box">
              <div className="img-box">
                <img src="images/images.jpeg" alt="" />
                <a href="" className="add_cart_btn">
                  <span>Add To Cart</span>
                </a>
              </div>
              <div className="detail-box">
                <h5>Offset Paper(50 pieces)</h5>
                <div className="product_info">
                  <h5>
                    <span>TK.</span> 50
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
          <div className="col-sm-6 col-lg-4">
            <div className="box">
              <div className="img-box">
                <img src="images/file.jpg" alt="" />
                <a href="" className="add_cart_btn">
                  <span>Add To Cart</span>
                </a>
              </div>
              <div className="detail-box">
                <h5>Document File</h5>
                <div className="product_info">
                  <h5>
                    <span>TK.</span> 15
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
          <div className="col-sm-6 col-lg-4">
            <div className="box">
              <div className="img-box">
                <img src="images/ruller.jpg" alt="" />
                <a href="" className="add_cart_btn">
                  <span>Add To Cart</span>
                </a>
              </div>
              <div className="detail-box">
                <h5>Ruller</h5>
                <div className="product_info">
                  <h5>
                    <span>TK.</span>20
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
          <div className="col-sm-6 col-lg-4">
            <div className="box">
              <div className="img-box">
                <img src="images/eraser.jpeg" alt="" />
                <a href="" className="add_cart_btn">
                  <span>Add To Cart</span>
                </a>
              </div>
              <div className="detail-box">
                <h5>Eraser</h5>
                <div className="product_info">
                  <h5>
                    <span>TK.</span> 10
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
          <div className="col-sm-6 col-lg-4">
            <div className="box">
              <div className="img-box">
                <img src="images/pencil.jpg" alt="" />
                <a href="" className="add_cart_btn">
                  <span>Add To Cart</span>
                </a>
              </div>
              <div className="detail-box">
                <h5>Pencil</h5>
                <div className="product_info">
                  <h5>
                    <span>TK.</span> 10
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
          <div className="col-sm-6 col-lg-4">
            <div className="box">
              <div className="img-box">
                <img src="images/bread.jpg" alt="" />
                <a href="" className="add_cart_btn">
                  <span>Add To Cart</span>
                </a>
              </div>
              <div className="detail-box">
                <h5>Bread</h5>
                <div className="product_info">
                  <h5>
                    <span>TK</span> 30
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
          <div className="col-sm-6 col-lg-4">
            <div className="box">
              <div className="img-box">
                <img src="images/soap.jpg" alt="" />
                <a href="" className="add_cart_btn">
                  <span>Add To Cart</span>
                </a>
              </div>
              <div className="detail-box">
                <h5>Soap</h5>
                <div className="product_info">
                  <h5>
                    <span>TK.</span> 45
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
        </div>
        <div className="btn_box">
          <a href="" className="view_more-link">
            View More
          </a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
