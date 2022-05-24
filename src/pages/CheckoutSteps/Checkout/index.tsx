import React from "react";
import { CKContainer } from "./style";
type Props = {};

const Checkout = (props: Props) => {
  return (
    <CKContainer>
      <div className="container">
        <div className="block">
          <div className="block-content">
            <div className="text text-title">Detail Order</div>
            <div className="col">
              <div className="row">
                <div className="label">Subtotal</div>
                <div className="label">Shipping Cost</div>
                <div className="label">Promo Code</div>
                <div className="label">Packaging</div>
              </div>
              <div className="row">
                <div className="text label">Rp 2.152.000</div>
                <div className="text label">Rp 500.000</div>
                <div className="text label">INDONESIA</div>
                <div className="text label">Rp 50.000</div>
                <div style={{ width: "195.01px" }}></div>
              </div>
            </div>
            <div className="line"></div>
            <div className="col">
              <div className="label">Grand Total</div>
              <div className="text text__bigger">Rp 2.702.000</div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="block-content">
            <div className="text text-title">Billing Address</div>
            <form>
              <div>
                <div className="label label__smaller">Fullname:</div>
              </div>
              <div>
                <input
                  className="text text-input"
                  type="text"
                  name="name"
                  placeholder="Ex: Rasyidin Arsyad Nasution"
                />
              </div>
              <div>
                <div className="label label__smaller">Email Address:</div>
              </div>
              <div>
                <input
                  className="text text-input"
                  type="text"
                  name="name"
                  placeholder="Ex: rasyid.arsyad@gmail.com"
                />
              </div>
              <div>
                <div className="label label__smaller">Phone Number:</div>
              </div>
              <div>
                <input
                  className="text text-input"
                  type="text"
                  name="name"
                  placeholder="Ex: 089111888999"
                />
              </div>
              <div>
                <div className="label label__smaller">Shipping Address</div>
              </div>
              <div>
                <input
                  className="text text-input"
                  type="text"
                  name="name"
                  placeholder="Ex: Patriot Street Number 666, Ngaklik, Sleman"
                />
              </div>
              <div>
                <div className="label label__smaller">Country</div>
              </div>
              <div>
                <select className="select">
                  <option>United State of America (USA)</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div>
                <div className="label label__smaller">State/Province</div>
              </div>
              <div className="">
                <select className="select">
                  <option>California</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="col-non-space-between">
                <div className="row">
                  <div className="label label__smaller">City</div>
                  <div>
                    <select className="select">
                      <option>San Francisco</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
                <div className="row row-margin-left">
                  <div className="label label__smaller">Zip Code</div>
                  <div>
                    <input
                      className="text text-input"
                      type="text"
                      name="name"
                      placeholder="Ex: 94024"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="label label__smaller">Choose Courier</div>
                <div>
                  <select className="select">
                    <option>DHL</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="buttons-container">
            <div className="button button-outline">Continue Shopping</div>
            <div className="button">Place My Order</div>
          </div>
        </div>
      </div>
    </CKContainer>
  );
};

export default Checkout;
