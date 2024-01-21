'use client'
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import Product from "./Product";
const Products = () => {
  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Products</h2>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Category
          </Dropdown.Toggle>

          <Dropdown.Menu>
          <Dropdown.Item ><Link href="/oldProducts">Old Products</Link></Dropdown.Item>
            <Dropdown.Item ><Link href='/foods'>Foods</Link></Dropdown.Item>
            <Dropdown.Item> <Link href="/accessories">Accessories</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Product/>
      </div>
    </section>
  );
};
export default Products;
