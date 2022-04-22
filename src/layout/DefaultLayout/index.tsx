import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../Footer";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#F7F6F4",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header"
      "main"
      "footer"`,
        }}
      >
        <Box sx={{ gridArea: "header" }}>
          <Header />
        </Box>
        <Box sx={{ gridArea: "main" }}>
          <Outlet />
        </Box>
        <Box sx={{ gridArea: "footer" }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
