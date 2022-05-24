import React, { useEffect } from "react";
import { MoWrapper } from "./style";
import { Link } from "react-router-dom";
import { IoTrash } from "react-icons/io5";
import { RootState } from "../../features/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from "../../features/cartSlice";
import { productsCart } from "../../common/Data";

type Props = {};

const ModalContainer = (props: Props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleIncreaseCart = (product: productsCart) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product: productsCart) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product: productsCart) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <MoWrapper>
      {cart.cartItems.length === 0 ? (
        <h2>Nothing in your cart!</h2>
      ) : (
        <>
          <div className="list-product">
            {cart.cartItems?.map((product: productsCart) => (
              <div key={product.id} className="product-item">
                <div className="product-img">
                  <img className="pr-img" src={product.img} alt="product" />
                </div>
                <div className="product-info">
                  <div className="info-left">
                    <div className="product-name">{product.name}</div>
                    {product.promotion !== 0 ? (
                      <div className="product-promotion">
                        {product.promotion}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="product-price">{product.price}</div>
                    <div className="product-series">{product.series}</div>
                  </div>
                  <div className="info-right">
                    <div className="tit-select">Select Packaging</div>
                    <select
                      className="product-select"
                      name="colors"
                      id="colors"
                    >
                      {product.color.map((color: string) => (
                        <option
                          className="select-item"
                          key={color}
                          value={color}
                        >
                          {color}
                        </option>
                      ))}
                    </select>
                    <div className="edit-cart">
                      <button
                        className="edit-button"
                        onClick={() => handleDecreaseCart(product)}
                      >
                        -
                      </button>
                      <span>{product.cartQuantity}</span>
                      <button
                        className="edit-button"
                        onClick={() => handleIncreaseCart(product)}
                      >
                        +
                      </button>
                      <span>Rp {product.cartQuantity * product.price}</span>
                      <button
                        className="edit-button-trash"
                        onClick={() => handleRemoveFromCart(product)}
                      >
                        <IoTrash size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="button-clear" onClick={() => handleClearCart()}>
              clear all
            </div>
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
                  <div className="label-price">Rp {cart.cartTotalAmount}</div>
                </div>
              </div>
            </div>
            <div className="checkout-col2">
              <Link to="/Checkout">
                <button className="checkout-button">Checkout</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </MoWrapper>
  );
};

export default ModalContainer;
