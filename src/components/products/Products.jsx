import React from "react";
import "../products/Products.css";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="product_title">
          <div></div>
          <div className="product_items">
            <ul>
              <li>All Plants</li>
              <li>New Arrivals</li>
              <li>Sale</li>
            </ul>
          </div>
          <div className="product_sort">
            <p>Sort by: </p>
            <select>
              <option value="Default sorting">Default sorting</option>
              <option value="Price sorting">Price sorting</option>
              <option value="Flowers">Flowers</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
