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
import DetailProduct from "../pages/DetailProduct/index";
import Error404 from "../pages/Error404/index";
import Layout from "../layout/DefaultLayout";
import Detail from "../components/DetailProduct/Detail";
import Gallery from "../components/DetailProduct/Gallery";
import HowToAdjust from "../components/DetailProduct/HowToAdjust";
import HowToCare from "../components/DetailProduct/HowToCare";
import Warranty from "../components/DetailProduct/Warranty";
import CustomEngrave from "../components/DetailProduct/CustomEngrave";
import { borderBottom } from "@mui/system";

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
        <Route path="DetailProduct" element={<DetailProduct />}>
          <Route index element={<Detail />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="HowToAdjust" element={<HowToAdjust />} />
          <Route path="HowToCare" element={<HowToCare />} />
          <Route path="Warranty" element={<Warranty />} />
          <Route path="CustomEngrave" element={<CustomEngrave />} />
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

export default Router;
