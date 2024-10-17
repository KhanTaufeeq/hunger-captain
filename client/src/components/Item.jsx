import React, { useEffect, useState } from "react";
import axios from "axios";

function Item() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/products/")
      .then((response) => {
        setProductList(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>All Products</h1>
      <div className="products-div">
        {productList.map((product) => {
          return (
            <div className="product" key={product.id}>
              <p className="product-pic">{product.product_pic}</p>
              <p className="product-likes">{product.product_likes}</p>
              <h2 className="product-name">{product.product_name}</h2>
              <p className="product-price">{product.product_price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Item;
