import React from "react";
import { Box, Button } from "@mui/material";
import * as images from "../../assets/img";
import * as icons from "../../assets/icons";
import { Link } from "react-router-dom";
import { BannerSliderWrapper } from "./style";

type Props = {};

const BannerSlider = (props: Props) => {
  return (
    <BannerSliderWrapper>
      <Box
        sx={{
          bgcolor: "#F1DDC9",
          width: "100%",
          height: "505px",
          mb: 7.2,
          display: "flex",
        }}
      >
        <Box sx={{ pt: 11.0, mr: 4.7, pl: 0.8 }}>
          <img src={images.Banner} alt="Banner1" width={325} height={467} />
        </Box>
        <Box sx={{ pt: 5.6, pb: 5.0 }}>
          <div
            style={{
              fontFamily: "Taviraj",
              color: "black",
              fontWeight: "400",
              width: 529,
              fontSize: 60,
            }}
          >
            WAY KAMBAS MINI EBONY
          </div>
          <div
            style={{
              borderBottomWidth: 0.5,
              borderColor: "black",
              borderBlockStyle: "solid",
              width: 95,
              marginBottom: 24,
              marginTop: 8,
            }}
          ></div>
          <p
            style={{
              fontFamily: "Nunito",
              color: "black",
              fontWeight: "400",
              width: 529,
              fontSize: 16,
              padding: 0,
              margin: 0,
            }}
          >
            MATOA Way Kambas - This wood is chosen to represent the
            <br /> Sumatran Rhino's skin which is designed with an overlap
            effect on
            <br /> its strap to represent Rhino's skin.
          </p>
          <Box
            sx={{
              mt: 0.8,
              mb: 4.4,
            }}
          >
            <Link
              to="Discover"
              style={{
                color: "black",
                fontFamily: "Taviraj",
                borderBottom: "#333333 1px solid",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Discover
            </Link>
          </Box>

          <Box>
            <Button
              style={{
                backgroundColor: "#D84727",
                color: "white",
                fontFamily: "Taviraj",
                textTransform: "none",
                fontWeight: "400",
                fontSize: 20,
                borderRadius: 0,
                width: 208,
                height: 62,
                padding: "0px 30px",
                justifyContent: "space-between",
              }}
            >
              <img src={icons.Cart} alt="Cart" />
              Add to card
            </Button>
            <Button
              style={{
                marginLeft: 16,
                border: "1px solid #D84727",
                color: "white",
                fontFamily: "Taviraj",
                textTransform: "none",
                fontWeight: "400",
                fontSize: 20,
                borderRadius: 0,
                height: 62,
                padding: "0px 30px",
                justifyContent: "space-between",
              }}
            >
              <img src={images.Cicil} alt="Cicil" />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: -11, ml: 120 }}>
        <Button
          style={{
            marginLeft: 16,
            border: "1px solid #D84727",
            fontSize: 20,
            borderRadius: 0,
            height: 60,
            width: 60,
          }}
        >
          <img src={icons.ArrowLeft} alt="ArrowLeft" />
        </Button>
        <Button
          style={{
            backgroundColor: "#D84727",
            fontSize: 20,
            borderRadius: 0,
            width: 60,
            height: 60,
            marginLeft: 15,
          }}
        >
          <img src={icons.ArrowRight} alt="ArrowRight" />
        </Button>
      </Box>
    </BannerSliderWrapper>
  );
};

export default BannerSlider;
