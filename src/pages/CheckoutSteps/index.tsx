import React from "react";
import { Link, Outlet } from "react-router-dom";
import { CSContainer } from "./style";
import * as images from "../../assets/icons";
import {
  CustomLinkCheckout,
  CustomLinkPayment,
  CustomLinkConfirm,
} from "../../router/router";
type Props = {};

const CheckoutSteps = () => {
  return (
    <CSContainer>
      <div className="menu">
        <div className="menu-item">
          <div>
            <CustomLinkCheckout className="text item-link" to="/Checkout">
              1. Checkout
            </CustomLinkCheckout>
          </div>
        </div>
        <div className="line"></div>
        <div className="menu-item">
          <div>
            <CustomLinkPayment className="text item-link" to="/Payment">
              2. Payment
            </CustomLinkPayment>
          </div>
        </div>
        <div className="line"></div>
        <div className="menu-item">
          <div>
            <CustomLinkConfirm className="text item-link" to="/Confirmation">
              3. Confirmation
            </CustomLinkConfirm>
          </div>
        </div>
      </div>
      <Outlet />
    </CSContainer>
  );
};

export default CheckoutSteps;
