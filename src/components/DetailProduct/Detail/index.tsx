import { margin } from "@mui/system";
import React from "react";
import * as images from "../../../assets/img/index";
import MonthlyDeals from "../../MonthlyDeals/index";
type Props = {};

const Detail = (props: Props) => {
  return (
    <div className="DContainer">
      <div className="detail-title">Material</div>
      <div className="detail-content">
        MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar
        Ebony (Diospyros celebica). This wood is chosen to represent the
        Sumatran Rhino's skin which is designed with an overlap effect on its
        strap to represent Rhino's skin. Sumatran Rhino has unique skin fold,
        the skin is fairly thin about 10-16mm, and is soft and pliable.
      </div>
      <div className="detail-title">Case</div>
      <div className="detail-content">
        The case on this timepiece is made with Height 12.5mm, Width 36mm,
        Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat
        glass to increase the enhanced durability on timepieces as scratch
        resistant and anti fingerprint. This timepiece is also equipped with
        Hand Polish Brass Spacer for a longer usage periods.
      </div>
      <div className="detail-title">Movement</div>
      <div className="detail-content">
        For the first time, MATOA comes with Seiko Quartz VD78 movement with
        small second function. A small second hand is above 6 o'clock position.
        This second hand dial is dedicated to Sumatran Rhino whom every second
        of its life is so precious because whenever Sumatran Rhino goes, it can
        be threatened by illegal poaching
      </div>
      <div className="detail-title">Dial</div>
      <div className="detail-content">
        In the dial, there are double layer of Makassar Ebony Veneer with 3, 9 &
        12 o'clock laser cut brass plate index.
      </div>
      <div className="detail-title">Hand</div>
      <div className="detail-content">
        The hour, minute & small second hands on MATOA Way Kambas - Sumatran
        Rhino is outfitted with skeleton hand and brush finished with Gold Matte
        color. This new design aims at adding a value for this special edition.
      </div>
      <div className="detail-title">Important to Note</div>
      <div className="detail-content">
        Wood color on watches is produced from a combination of mature and fresh
        wood but should not be viewed as a defect. It is a very natural process
        of wood aging.
      </div>
      <div className="parameter-product">
        <img src={images.ParameterProduct} alt="parameter" />
      </div>
      <div style={{ margin: "120px 0px 50px" }}>
        <MonthlyDeals />
      </div>
    </div>
  );
};

export default Detail;
