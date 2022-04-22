import React from "react";
import { RNContainer } from "./style";
import { LIST_NEW_PRODUCTS } from "../../Data/Data";
import { Link } from "react-router-dom";

type Props = {};

const NewProducts = (props: Props) => {
  const LIST_S_PRODUCTS = LIST_NEW_PRODUCTS.filter(
    (product: any) => product.series === "S"
  );
  const LIST_A_PRODUCTS = LIST_NEW_PRODUCTS.filter(
    (product: any) => product.series === "A"
  );
  const LIST_B_PRODUCTS = LIST_NEW_PRODUCTS.filter(
    (product: any) => product.series === "B"
  );
  return (
    <RNContainer>
      <div className="content">
        <div className="row">
          <div className="row-title">Maple Series</div>
          <div className="row-border"></div>
          <div className="products-list">
            {LIST_S_PRODUCTS.map((product: any) => (
              <Link
                to="/DetailProduct"
                key={product.id}
                className="product-items"
              >
                <div className="product-img">
                  <img className="img" src={product.img} alt="product" />
                </div>
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  {product.promotion !== 0 ? (
                    <div className="product-promotion">{product.promotion}</div>
                  ) : (
                    <></>
                  )}
                  <div className="product-price">Rp {product.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="row-title">Ebony Series</div>
          <div className="row-border"></div>
          <div className="row-list">
            {LIST_A_PRODUCTS.map((product: any) => (
              <Link
                to="/DetailProduct"
                key={product.id}
                className="product-items"
              >
                <div className="product-img">
                  <img className="img" src={product.img} alt="product" />
                </div>
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  {product.promotion !== 0 ? (
                    <div className="product-promotion">{product.promotion}</div>
                  ) : (
                    <></>
                  )}
                  <div className="product-price">Rp {product.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="row-title">Featured</div>
          <div className="row-border"></div>
          <div className="row-list">
            {LIST_B_PRODUCTS.map((product: any) => (
              <Link
                to="/DetailProduct"
                key={product.id}
                className="product-items"
              >
                <div className="product-img">
                  <img className="img" src={product.img} alt="product" />
                </div>
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  {product.promotion !== 0 ? (
                    <div className="product-promotion">{product.promotion}</div>
                  ) : (
                    <></>
                  )}
                  <div className="product-price">Rp {product.price}</div>
                </div>
              </Link>
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
