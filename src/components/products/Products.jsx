import React, { useEffect, useState } from "react";
import "../products/Products.css";
import axios from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../context/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Products = ({ data }) => {
  let wishlist = useSelector((state) => state.wishlist.value);
  // console.log(wishlist);
  const dispatch = useDispatch();

  // console.log(data);
  const product = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.images[0]} alt="product" />
      {/* <div className="card_icons">
        <img src="" alt="" />
      </div> */}
      <div className="card_texts">
        <h3>{el.title}</h3>
        <p>${el.price}.00</p>
      </div>
      <button onClick={() => dispatch(toggleLike(el))}>
        {wishlist?.some((item) => item.id === el.id) ? (
          <FaHeart />
        ) : (
          <FaRegHeart />
        )}
      </button>
      <button>
        <IoCartOutline />
      </button>
    </div>
  ));
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
        <div className="wrapper">{product}</div>
      </div>
    </div>
  );
};

export default Products;
