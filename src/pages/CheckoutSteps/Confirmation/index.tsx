import React from "react";
import { CFContainer } from "./style";
import * as images from "../../../assets/img/index";
import * as icons from "../../../assets/icons/index";
type Props = {};

const Confirmation = (props: Props) => {
  return (
    <CFContainer>
      <div className="container">
        <div className="block block-justify-center">
          <div className="content">
            <img src={images.Deco} alt="deco" />
            <div className="title">Order Confirmed</div>
            <div className="text-Nunito">
              Your order have been confirmed, please wait and track your order
            </div>
            <div className="button">Go to track page</div>
          </div>
        </div>
        <div className="block">
          <div className="content">
            <div className="col col-top">
              <img src={icons.Time} alt="Time" />
              <div>10 days delivery</div>
              <img src={icons.Truck} alt="Time" />
              <div>DHL Express</div>
            </div>
            <div className="box">
              <div className="text text--small">Way Kampas Mini Ebony</div>
              <div className="text text--gray">2 x IDR 1.024.000</div>
              <div className="text text--small">Sikka (Ebony & Mapple)</div>
              <div className="text text--gray">1 x IDR 1.264.000</div>
            </div>
            <div className="box">
              <div className="col">
                <div className="text text-left">Subtotal</div>
                <div className="text text-right">Rp 2.152.000</div>
              </div>
              <div className="col">
                <div className="text text-left">Shipping Cost</div>
                <div className="text text-right">500.000</div>
              </div>
              <div className="col">
                <div className="text text-left">Packaging</div>
                <div className="text text-right">Rp 50.000</div>
              </div>
              <div className="border"></div>
              <div className="col">
                <div className="text text-left">Grand Total</div>
                <div className="text text-right--big">Rp 2.702.000</div>
              </div>
              <div className="border"></div>
              <div className="col">
                <div className="text text-left--small">Shipping Address</div>
                <div className="text text-right--small">
                  18 Richardson Drive <br /> Fountain Valley, CA 92708
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CFContainer>
  );
};

export default Confirmation;
