import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import "./SingleProducts.css";
import '../../App.css';

const SingleProduct = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  });

  return (
    <div className="single-page">
      <div className="back">
        <Link to="/products">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
          <span> Go Back</span>
        </Link>
      </div>
      <div className="single-product">
        <div className="s1">
          <div className="single-product-image">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
        <div className="s2">
          <div className="single-product-name">
            <h2>{product.title}</h2>
          </div>
          <div className="single-product-price">
            <h4>Price = ${product.price}</h4>
          </div>
          <div className="single-product-category">
            <h5>Category: {product.category}</h5>
          </div>
          <div className="single-product-desc">
            <p>
              <span style={{ fontWeight: "bold" }}>Description:</span> <br />
              {product.description}
            </p>
          </div>
          {/* <div className="single-product-stars" style={{ fontWeight: "bold" }}>
              Stars: {product.rating.rate} <span style={{color: "#FFD700"}}> <i class="fa-solid fa-star" ></i></span>
        </div> */}
          <div>
            <button
              className="single-product-add"
              onClick={() => props.handleAddProduct(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
