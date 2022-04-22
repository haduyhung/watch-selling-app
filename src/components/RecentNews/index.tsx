import React from "react";
import { Link } from "react-router-dom";
import { RNContainer } from "./style";
import * as images from "../../assets/img/index";

type Props = {};

const RecentNews = (props: Props) => {
  return (
    <RNContainer>
      <div className="title">Recent News</div>
      <div className="border"></div>
      <div className="content">
        <div className="question">
          <div className="question-top">Where to play</div>
          <div className="question-bottom">
            Matoa Where To <br /> Travel? Yogyakarta
          </div>
          <Link className="button" to="/Discover">
            Discover
          </Link>
        </div>
        <div className="image">
          <img src={images.Banner4} alt="Banner"></img>
        </div>
      </div>
    </RNContainer>
  );
};

export default RecentNews;
