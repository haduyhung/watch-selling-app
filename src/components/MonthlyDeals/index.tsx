import React from "react";
import { Link } from "react-router-dom";
import { LIST_ON_SALE } from "../../Data/Data";
import { MDContainer } from "./style";
import * as images from "../../assets/icons/index";

type Props = {};

interface Product {
  id: number;
  name: string;
  img: string;
  discount: number;
  promotion: number;
  price: number;
}

const MonthlyDeals = (props: Props) => {
  return (
    <MDContainer>
      <div className="title">Monthly Deals</div>
      <div className="content">
        {LIST_ON_SALE.map((product: Product) => (
          <div key={product.id} className="list-item-container">
            <div className="list-item">
              <div className="image-item">
                <Link to="/123">
                  <img src={product.img} alt={product.name} />
                </Link>
              </div>
              <div className="lbl-item">
                <Link className="link1" to="/">
                  {product.name}
                </Link>
              </div>
              <div className="lbl-item">
                <Link to="/" className="link2">
                  {product.discount}% Off
                </Link>
              </div>
              <div className="lbl-item">
                <Link to="/" className="link3">
                  Rp {product.promotion}
                </Link>
              </div>
              <div className="price-item">Rp {product.price}</div>
              <div className="block-button">
                <div className="button-icon">
                  <img src={images.Heart} alt="button" />
                </div>
                <div className="button-item">Add to cart</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MDContainer>
  );
};

export default MonthlyDeals;
