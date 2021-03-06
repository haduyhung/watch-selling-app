import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as images from "../../assets/img";
import Modal from "@mui/material/Modal";

import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
} from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import { HeaderWrapper } from "./style";
import ModalContainer from "../../components/ModalCart";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";

const navLinks = [
  { title: "Watches", path: "/Watches" },
  { title: "Eyewear", path: "/Eyewear" },
  { title: "Accessories", path: "/Accessories" },
  { title: "News", path: "/News" },
];

type Props = {};

const Header = (props: Props) => {
  const { cartTotalQuantity } = useSelector((state: RootState) => state.cart);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <HeaderWrapper>
      <AppBar
        position="static"
        style={{
          boxShadow: "0px 0px 0px 0px",
        }}
        className="appBar"
      >
        <Container maxWidth="lg" className="navContainer">
          <Toolbar className="toolbar" sx={{ justifyContent: "space-between" }}>
            <Link to="/">
              <img src={images.Logo} alt="logo" className="logo" />
            </Link>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className="listMenu1"
            >
              {navLinks.map(({ title, path }) => (
                <ListItem button key={title} component={Link} to={path}>
                  <ListItemText
                    className="linkText"
                    primary={title}
                    primaryTypographyProps={{
                      fontSize: "20px",
                      fontFamily: "Taviraj",
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <List
              component="nav"
              aria-labelledby="main navigation"
              className="listMenu"
            >
              <ListItem button key="Search">
                <AiOutlineSearch color="black" size={28} />
              </ListItem>
              <ListItem button key="Login" component={Link} to="/login">
                <img
                  src={images.Login}
                  alt="Login"
                  style={{ float: "left", marginRight: 5 }}
                />
                <ListItemText
                  className="linkText"
                  primaryTypographyProps={{ color: "black" }}
                  primary="Login"
                />
              </ListItem>
              <ListItem
                button
                key="Cart"
                onClick={handleOpen}
                sx={{
                  bgcolor: "#F1DDC9",
                  borderRadius: 50,
                  width: 46,
                  height: 46,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={images.Cart} alt="Cart" />

                {cartTotalQuantity === 0 ? null : (
                  <h3
                    style={{
                      position: "absolute",
                      right: "-5px",
                      bottom: "-18px",
                      color: "#000000",
                      fontSize: "15px",
                      backgroundColor: "#999999",
                      borderRadius: "10px",
                      padding: "1px 2px",
                    }}
                  >
                    {cartTotalQuantity}
                  </h3>
                )}
              </ListItem>
            </List>
          </Toolbar>
        </Container>
      </AppBar>
      <Modal
        open={isOpen}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            width: "70%",
            bgcolor: "background.paper",
            boxShadow: 24,
            pt: 3.2,
            pl: 3.2,
            pb: 4,
          }}
        >
          <ModalContainer />
        </Box>
      </Modal>
    </HeaderWrapper>
  );
};

export default Header;
