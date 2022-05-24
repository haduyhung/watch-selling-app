import React from "react";
import {
  Routes,
  Route,
  LinkProps,
  useResolvedPath,
  useMatch,
  Link,
} from "react-router-dom";
import Home from "../pages/Home/index";
import Accessories from "../pages/Accessories";
import Eyewear from "../pages/Eyewear/index";
import News from "../pages/News";
import Watches from "../pages/Watches/index";
import DetailProducts from "../pages/DetailProduct";
import DetailProduct from "../pages/DetailProduct/DetailProduct";
import Error404 from "../pages/Error404/index";
import Layout from "../layout/DefaultLayout";
import Detail from "../components/DetailProduct/Detail";
import Gallery from "../components/DetailProduct/Gallery";
import HowToAdjust from "../components/DetailProduct/HowToAdjust";
import HowToCare from "../components/DetailProduct/HowToCare";
import Warranty from "../components/DetailProduct/Warranty";
import CustomEngrave from "../components/DetailProduct/CustomEngrave";
import Checkout from "../pages/CheckoutSteps/Checkout";
import Payment from "../pages/CheckoutSteps/Payment";
import Confirmation from "../pages/CheckoutSteps/Confirmation";
import CheckoutSteps from "../pages/CheckoutSteps";
import * as icons from "../assets/icons/index";
import Register from "../pages/Register";
import Login from "../pages/Login";

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Accessories" element={<Accessories />} />
        <Route path="Eyewear" element={<Eyewear />} />
        <Route path="News" element={<News />} />
        <Route path="Watches" element={<Watches />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="DetailProduct" element={<DetailProducts />}>
          <Route path=":id" element={<DetailProduct />}>
            <Route index element={<Detail />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="HowToAdjust" element={<HowToAdjust />} />
            <Route path="HowToCare" element={<HowToCare />} />
            <Route path="Warranty" element={<Warranty />} />
            <Route path="CustomEngrave" element={<CustomEngrave />} />
          </Route>
        </Route>
        <Route path="" element={<CheckoutSteps />}>
          <Route path="Checkout" element={<Checkout />} />
          <Route path="Confirmation" element={<Confirmation />} />
          <Route path="Payment" element={<Payment />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "#d84727" : "#999999",
          textDecoration: "none",
          borderBottom: match ? "2px #d84727 solid" : "none",
          fontFamily: "Taviraj",
        }}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}

export function CustomLinkCheckout({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  console.log("children", children);
  return (
    <div>
      {match ? (
        <Link to={to} style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <img src={icons.Checkout} alt="Checkout" />
          </div>
        </Link>
      ) : (
        <Link to={to} style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <img src={icons.CheckoutOutline} alt="Checkout" />
          </div>
        </Link>
      )}
      <Link
        style={{
          color: match ? "#d84727" : "#999999",
          textDecoration: "none",
          fontFamily: "Taviraj",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "24px",
        }}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}

export function CustomLinkPayment({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      {match ? (
        <Link to={to} style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <img src={icons.Payment} alt="Payment" />
          </div>
        </Link>
      ) : (
        <Link to={to} style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <img src={icons.PaymentOutline} alt="Payment" />
          </div>
        </Link>
      )}
      <Link
        style={{
          color: match ? "#d84727" : "#999999",
          textDecoration: "none",
          fontFamily: "Taviraj",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "24px",
        }}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}

export function CustomLinkConfirm({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  console.log("match", match);
  return (
    <div>
      {match?.pathname === "/Confirmation" ? (
        <Link to={to} style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <img src={icons.Confirmation} alt="Confirmation" />
          </div>
        </Link>
      ) : (
        <Link to={to} style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <img src={icons.ConfirmationOutline} alt="Confirmation" />
          </div>
        </Link>
      )}
      <Link
        style={{
          color: match ? "#d84727" : "#999999",
          textDecoration: "none",
          fontFamily: "Taviraj",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "24px",
        }}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}

export default Router;
