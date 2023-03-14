import React from "react";
// import "./Products.css";
import '../../App.css';
import { Link } from "react-router-dom";
const Products = (props) => {
  return (
    <div className="products">
      {props.productItems.map((productItem) => (
        <div className="card" key={productItem.id}>
          <div>
            <img
              className="product-image"
              src={productItem.image}
              alt={productItem.title}
            />
          </div>

          <div>
            <center>
              <h4 className="product-name">{productItem.title}</h4>
            </center>
          </div>
          <div className="product-price">
            <center>${productItem.price}</center>
          </div>
          <div className="product-info">
            <center>
              <Link to={`/products/${productItem.id}`}>
                <p>More Info</p>
              </Link>
            </center>
          </div>
          <div>
            <button
              className="product-add-button"
              onClick={() => props.handleAddProduct(productItem)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
