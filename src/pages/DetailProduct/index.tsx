import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { LIST_NEW_PRODUCTS } from "../../Data/Data";

type Props = {};

const DetailProducts = (props: Props) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default DetailProducts;
