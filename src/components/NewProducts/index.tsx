import React, { useState } from "react";
import { RNContainer } from "./style";
import { LIST_NEW_PRODUCTS } from "../../Data/Data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

interface Product {
  series: string;
  id: number;
  img: string;
  name: string;
  promotion: number;
  price: number;
}
// interface info {
//   name: string;
//   age?: number;
// }

const NewProducts = () => {
  const LIST_S_PRODUCTS = LIST_NEW_PRODUCTS.filter(
    (product: Product) => product.series === "S"
  );
  const LIST_A_PRODUCTS = LIST_NEW_PRODUCTS.filter(
    (product: Product) => product.series === "A"
  );
  const LIST_B_PRODUCTS = LIST_NEW_PRODUCTS.filter(
    (product: Product) => product.series === "B"
  );

  const dispatch = useDispatch();
  return (
    <RNContainer>
      <div className="content">
        <div className="row">
          <div className="row-title">Maple Series</div>
          <div className="row-border"></div>
          <div className="products-list">
            {LIST_S_PRODUCTS.map((product: Product) => (
              <div key={product.id} className="product-items">
                <Link
                  to={`/DetailProduct/${product.id}`}
                  className="product-img"
                >
                  <img className="img" src={product.img} alt="product" />
                </Link>
                <div className="product-info">
                  <Link
                    to={`/DetailProduct/${product.id}`}
                    className="product-name"
                  >
                    {product.name}
                  </Link>
                  {product.promotion !== 0 ? (
                    <div className="product-promotion">{product.promotion}</div>
                  ) : (
                    <></>
                  )}
                  <div className="product-price">Rp {product.price}</div>
                  <div className="item-button">add to cart</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="row-title">Ebony Series</div>
          <div className="row-list">
            {LIST_A_PRODUCTS.map((product: Product) => (
              <div key={product.id} className="product-items">
                <Link
                  to={`/DetailProduct/${product.id}`}
                  className="product-img"
                >
                  <img className="img" src={product.img} alt="product" />
                </Link>
                <div className="product-info">
                  <Link
                    to={`/DetailProduct/${product.id}`}
                    className="product-name"
                  >
                    {product.name}
                  </Link>
                  {product.promotion !== 0 ? (
                    <div className="product-promotion">{product.promotion}</div>
                  ) : (
                    <></>
                  )}
                  <div className="product-price">Rp {product.price}</div>
                  <div className="item-button">add to cart</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="row-title">Featured</div>
          <div className="row-border"></div>
          <div className="row-list">
            {LIST_B_PRODUCTS.map((product: Product) => (
              <div key={product.id} className="product-items">
                <Link
                  to={`/DetailProduct/${product.id}`}
                  className="product-img"
                >
                  <img className="img" src={product.img} alt="product" />
                </Link>
                <div className="product-info">
                  <Link
                    to={`/DetailProduct/${product.id}`}
                    className="product-name"
                  >
                    {product.name}
                  </Link>
                  {product.promotion !== 0 ? (
                    <div className="product-promotion">{product.promotion}</div>
                  ) : (
                    <></>
                  )}
                  <div className="product-price">Rp {product.price}</div>
                  <div className="item-button">add to cart</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="button-container">
        <div className="border"></div>
        <Link className="button" to="/">
          See More
        </Link>
        <div className="border"></div>
      </div>
    </RNContainer>
  );
};

export default NewProducts;
