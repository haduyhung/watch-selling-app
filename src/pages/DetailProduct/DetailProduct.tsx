import React from "react";
import { DPContainer } from "./style";
import * as images from "../../assets/img/index";
import * as icons from "../../assets/icons/index";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { CustomLink } from "../../router/router";
import { LIST_NEW_PRODUCTS } from "../../Data/Data";

type Props = {};

interface Product {
  id: number;
  name: string;
  discount: number;
  price: number;
  promotion: number;
  series: string;
  color: string[];
  img: string;
}

const DetailProduct = (props: Props) => {
  const params = useParams<{ id: string }>();
  console.log("id", params);
  const product = LIST_NEW_PRODUCTS.find(
    (p: Product) => p.id.toString() === params.id
  );

  return (
    <DPContainer>
      <div className="routerText">
        <div className="routerTextWrapper">
          <div>Home / Product / Watches /</div>
          <div className="routerText-red">Way Kambas Mini Ebony</div>
        </div>
      </div>
      <div className="content">
        <div className="content-img">
          <div className="img-col1">
            <div className="img-main">
              <img src={images.Detail} alt="detail" />
            </div>
            <div className="img-detail">
              <img src={images.Detail1} alt="detail" />
            </div>
            <div className="img-detail">
              <img src={images.Detail2} alt="detail" />
            </div>
            <div className="img-detail">
              <img src={images.Detail3} alt="detail" />
            </div>
            <div className="img-detail">
              <img src={images.Detail4} alt="detail" />
            </div>
          </div>
          <div className="img-col2">
            <div className="nameProduct">{product?.name}</div>
            <div className="priceProduct">Rp {product?.price}</div>
            <div className="lastPrice">Rp {product?.promotion}</div>
            <div className="chooseModel">Choose Model</div>
            <div className="models">
              <label>
                <input type="radio" name="model" value="model1" checked />
                <img className="models-img" src={images.Model1} alt="model" />
              </label>
              <label>
                <input type="radio" name="model" value="model2" />
                <img className="models-img" src={images.Model2} alt="mode2" />
              </label>
            </div>
            <div className="cartButtons">
              <button className="minus">-</button>
              <h1>0</h1>
              <button className="plus">+</button>
              <Button className="addCart">
                <img src={icons.Cart} alt="Cart" /> Add to card
              </Button>
              <Button className="cicil">
                <img src={images.Cicil} alt="Cicil" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="navbar">
          <ul className="list-menu">
            <CustomLink className="list-item" to="">
              Detail
            </CustomLink>
            <CustomLink className="list-item" to="Warranty">
              Warranty
            </CustomLink>
            <CustomLink className="list-item" to="CustomEngrave">
              Custom Engrave
            </CustomLink>
            <CustomLink className="list-item" to="HowToAdjust">
              How to Adjust
            </CustomLink>
            <CustomLink className="list-item" to="HowToCare">
              How to Care
            </CustomLink>
            <CustomLink className="list-item" to="Gallery">
              Gallery
            </CustomLink>
          </ul>
        </div>
        <div className="info-container">
          <Outlet />
        </div>
      </div>
    </DPContainer>
  );
};

export default DetailProduct;
