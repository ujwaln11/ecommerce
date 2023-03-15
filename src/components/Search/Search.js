import React from "react";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";

const Search = (props) => {
  let { searchKeyword } = useParams();
  return (
    <div>
      <Products
        productItems={props.productItems.filter((product) => {
          return product.title
            .toUpperCase()
            .includes(searchKeyword.toUpperCase());
        })}
      />
    </div>
  );
};

export default Search;
