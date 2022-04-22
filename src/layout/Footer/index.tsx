import { Container, Box, ImageList } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { LIST_CREDITS } from "../../Data/Data";
import { FooterWrapper } from "./style";
import * as images from "../../assets/img/index";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <Box sx={{ bgcolor: "#DA5E42" }}>
        <Container maxWidth="lg">
          <FooterWrapper>
            <div className="list-bank">
              {LIST_CREDITS.map((item: any) => (
                <div key={item.id} className="item-bank">
                  <Link to="/" className="link-item">
                    <img src={item.img} alt="credit" />
                  </Link>
                </div>
              ))}
            </div>
          </FooterWrapper>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#D84727" }}>
        <Container maxWidth="lg">
          <FooterWrapper>
            <div className="info">
              <div className="row-info">
                <div className="logo-images">
                  <img src={images.LogoFooter} alt="Logo" />
                </div>
                <div className="info-text">
                  <div className="info-bold">Address</div>
                  <div>
                    Store & Office <br /> Jl. Setrasari Kulon III, No. 10-12,
                    Sukarasa, Sukasari, Bandung, Jawa Barat, Indonesia 40152
                  </div>
                  <div className="info-bold">Office Hour</div>
                  <div className="info-normal">
                    Monday - Sunday <br /> 10.00 - 18.00
                  </div>
                </div>
              </div>
              <div className="row-info">
                <div className="title">Get in touch</div>
                <div className="border"></div>
                <div className="info-texts">
                  <div className="flexText">
                    <div className="info-bold">Phone</div>
                    <div>022-20277564</div>
                  </div>
                  <div className="flexText">
                    <div className="info-bold">
                      Service <br /> Center
                    </div>
                    <div>0811-233-8899</div>
                  </div>
                  <div className="flexText">
                    <div className="info-bold">
                      Customer <br /> Service
                    </div>
                    <div>0811-235-9988</div>
                  </div>
                </div>
              </div>
              <div className="row-info">
                <div className="title">Useful Link</div>
                <div className="border"></div>
                <div className="info-texts">
                  <div>
                    Warranty & Complaints <br /> Order & Shipping <br />{" "}
                    Tracking Order <br /> About Us <br /> Repair <br /> Terms{" "}
                    <br /> FAQ
                  </div>
                </div>
              </div>
              <div className="row-info">
                <div className="title">Campaign</div>
                <div className="border"></div>
                <div className="info-texts">
                  <div>
                    Mengenal Arti Cukup <br /> Tell Your Difference <br />{" "}
                    Waykambas <br /> Rebrand <br />
                    Gallery <br /> Singo <br /> Rakai
                  </div>
                </div>
              </div>
            </div>
          </FooterWrapper>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
