import React from "react";
import { TContainer } from "./style";
import * as images from "../../assets/img/index";
import * as icons from "../../assets/icons/index";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <TContainer>
      <div className="content">
        <div>
          <div className="image">
            <img src={images.Banner5} alt="banner" />
          </div>
          <div className="button">
            <div>
              <img src={icons.VectorLeft} alt="button" />
            </div>
            <div>
              <img src={icons.VectorRight} alt="button" />
            </div>
          </div>
        </div>
        <div className="texts">
          <div className="title">Testimonials</div>
          <div className="text1">
            Loving my new KAILI watch from @matoa_id, the first ever Indonesian
            watch local brand that uses wood as their main material. Like any
            other Matoa products, KAILI is inspired by Indonesian heritage.
          </div>
          <div className="text2">Gita Savitri</div>
          <div className="text3">Content Creator/Influencer</div>
        </div>
      </div>
    </TContainer>
  );
};

export default Testimonials;
