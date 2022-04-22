import React from "react";
import { MoWrapper } from "./style";
import { LIST_NEW_PRODUCTS } from "../../Data/Data";
import * as images from "../../assets/icons/index";
import { Link } from "react-router-dom";
import { IoTrash } from "react-icons/io5";
import { ClassNames } from "@emotion/react";

type Props = {};

const ModalContainer = (props: Props) => {
  return (
    <MoWrapper>
      <div className="list-product">
        {LIST_NEW_PRODUCTS.map((product: any) => (
          <Link key={product.id} className="link-item" to="/">
            <div className="product-item">
              <div className="product-img">
                <img className="pr-img" src={product.img} alt="product" />
              </div>
              <div className="product-info">
                <div className="info-left">
                  <div className="product-name">{product.name}</div>
                  {product.promotion !== 0 ? (
                    <div className="product-promotion">{product.promotion}</div>
                  ) : (
                    <></>
                  )}
                  <div className="product-price">{product.price}</div>
                  <div className="product-series">{product.series}</div>
                </div>
                <div className="info-right">
                  <div className="tit-select">Select Packaging</div>
                  <div className="custom-select">
                    <select
                      style={{
                        cursor: "pointer",
                        position: "relative",
                        fontFamily: "Taviraj",
                        width: "313px",
                        height: "42px",
                        padding: "9px 16px",
                        borderRadius: 0,
                        border: "1px #333333 solid",
                        color: "#999999",
                      }}
                      name="colors"
                      id="colors"
                    >
                      {product.color.map((color: string) => (
                        <option className="select-item" value={color}>
                          {color}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="edit-cart">
                    <button className="edit-button">-</button>
                    <span>0</span>
                    <button className="edit-button">+</button>
                    <span>Rp 2048000</span>
                    <button className="edit-button-trash">
                      <IoTrash size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="checkout-block">
        <div className="checkout-col1">
          <div className="col1-left">
            <div className="left-label">Kode Promo</div>
            <input className="left-input" type="text" name="name" />
            <div className="left-label2">35% OFF</div>
          </div>
          <div className="col1-right">
            <div className="right-label">Subtotal</div>
            <div className="right-block">
              <div className="label-promotion">Rp 3312000</div>
              <div className="label-price">Rp 2152000</div>
            </div>
          </div>
        </div>
        <div className="checkout-col2">
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </MoWrapper>
  );
};

export default ModalContainer;
