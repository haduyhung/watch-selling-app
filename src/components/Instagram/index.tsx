import { LIST_INSTAGRAM } from "../../Data/Data";
import { IGContainer } from "./style";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Instagram = (props: Props) => {
  return (
    <IGContainer>
      <div className="title">Instagram</div>
      <div className="border"></div>
      <div className="list-banner">
        {LIST_INSTAGRAM.map((item: any) => (
          <Link to="/" key={item.id} className="item-banner">
            <img src={item.img} alt="banner" />
          </Link>
        ))}
      </div>
    </IGContainer>
  );
};

export default Instagram;
