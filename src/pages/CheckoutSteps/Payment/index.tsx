import React from "react";
import { PMContainer } from "./style";
import * as images from "../../../assets/img/index";
type Props = {};

const Payment = (props: Props) => {
  return (
    <PMContainer>
      <div className="container">
        <div className="block">
          <div className="block-non-flex">
            <div className="content">
              <div className="title">Detail Order</div>
              <div className="box">
                <div className="col">
                  <div className="label">Subtotal</div>
                  <div className="text"> Rp 2.152.000</div>
                </div>
                <div className="col">
                  <div className="label">Shipping cost</div>
                  <div className="text">Rp 500.000</div>
                </div>
                <div className="col">
                  <div className="label">Promo code</div>
                  <div className="text">INDONESIA</div>
                </div>
                <div className="col">
                  <div className="label">Packaging</div>
                  <div className="text">Rp 50.000</div>
                </div>
                <div className="border"></div>
                <div className="col">
                  <div className="label">Packaging</div>
                  <div className="text text-big">Rp 50.000</div>
                </div>
              </div>
            </div>
            <div className="content content-payment">
              <div className="col-title">
                <div className="title"> Payment Detail</div>
                <div className="text text--red">11:55:55</div>
              </div>
              <div className="text-payment-detail">
                Please make a payment according with the limit time specified,
                starting from now
              </div>
            </div>
          </div>
          <div className="block-child">
            <div className="content">
              <div className="title">Order Detail</div>
              <div className="box">
                <div className="col-flex-start">
                  <div className="label label--small">Order Number</div>
                  <div className="row">
                    <div className="text1">MTAWEB-3A86D4DB</div>
                    <div className="text-Nunito">
                      Always remember Order Number for easy tracking
                    </div>
                  </div>
                </div>
                <div className="col-flex-start">
                  <div className="label label--small">Purchase Date</div>
                  <div className="row">
                    <div className="text1">2019-11-07 14:01:48</div>
                  </div>
                </div>
                <div className="col-flex-start">
                  <div className="label label--small">Items</div>
                  <div className="row">
                    <div className="text1">Way Kambas Mini Ebony</div>
                    <div className="text-Nunito">2 x IDR 1.024.000</div>
                    <div className="text1">Sikka (Ebony & Mapple)</div>
                    <div className="text-Nunito">1 x IDR 1.264.000</div>
                  </div>
                </div>
                <div className="col-flex-start">
                  <div className="label label--small">Name</div>
                  <div className="row">
                    <div className="text1">Rasyidin Arsyad Nasution</div>
                  </div>
                </div>
                <div className="col-flex-start">
                  <div className="label label--small">Phone</div>
                  <div className="row">
                    <div className="text1">+18911188899</div>
                  </div>
                </div>
                <div className="col-flex-start">
                  <div className="label label--small">Email</div>
                  <div className="row">
                    <div className="text1">rasyid.arsyad@gmail.com</div>
                  </div>
                </div>
                <div className="col-flex-start">
                  <div className="label label--small">Shipping Address</div>
                  <div className="row">
                    <div className="text1">18 Richardson Drive</div>
                    <div className="text1">Fountain Valley, CA 92708</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="content content__big">
            <div className="title">Payment Method</div>
            <div className="box">
              <div className="col-credit">
                <div className="col-items">
                  <input
                    className="radio-credit"
                    type="radio"
                    name="credit card"
                    value="BNI Cicilan"
                  />
                  <label>
                    <div className="label-credit">BNI Cicilan 0%</div>
                    <img src={images.CreditCard1} alt="CreditCard" />
                  </label>
                </div>
                <div className="col-items">
                  <input
                    className="radio-credit"
                    type="radio"
                    name="credit card"
                    value="BNI Cicilan"
                  />
                  <label>
                    <div className="label-credit">Mandiri Cicilan 0%</div>
                    <img src={images.CreditCard2} alt="CreditCard" />
                  </label>
                </div>
                <div className="col-items">
                  <input
                    className="radio-credit"
                    type="radio"
                    name="credit card"
                    value="Mandiri Cicilan"
                  />
                  <label>
                    <div className="label-credit">Bank Transfer</div>
                    <img src={images.CreditCard3} alt="CreditCard" />
                  </label>
                </div>
                <div className="col-items">
                  <input
                    className="radio-credit"
                    type="radio"
                    name="credit card"
                    value="Credit Card"
                  />
                  <label>
                    <div className="label-credit">Credit Card</div>
                    <img src={images.CreditCard4} alt="CreditCard" />
                    <img src={images.CreditCard5} alt="CreditCard" />
                  </label>
                </div>
              </div>
              <div className="col-credit">
                <div className="col-items">
                  <input
                    className="radio-credit"
                    type="radio"
                    name="credit card"
                    value="BNI Cicilan"
                  />
                  <label>
                    <div className="label-credit">
                      Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)
                    </div>
                    <img src={images.CreditCard6} alt="CreditCard" />
                    <img src={images.CreditCard7} alt="CreditCard" />
                    <img src={images.CreditCard8} alt="CreditCard" />
                  </label>
                </div>
                <div className="col-items">
                  <input
                    className="radio-credit"
                    type="radio"
                    name="credit card"
                    value="BNI Cicilan"
                  />
                  <label>
                    <div className="label-credit">GO-PAY</div>
                    <img src={images.CreditCard9} alt="CreditCard" />
                  </label>
                </div>

                <div className="col-items">
                  <input
                    className="radio-credit"
                    type="radio"
                    name="credit card"
                    value="Credit Card"
                  />
                  <label>
                    <div className="label-credit">Krdivo</div>
                    <img src={images.CreditCard10} alt="CreditCard" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-button">
          <div></div>
          <div className="button">Proceed Payment</div>
        </div>
      </div>
    </PMContainer>
  );
};

export default Payment;
