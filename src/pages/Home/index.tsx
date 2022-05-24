import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import * as images from "../../assets/img";
import { HomeWrapper } from "./style";
import BannerSlider from "../../components/BannerSlider";
import RecentNews from "../../components/RecentNews/index";
import Testimonials from "../../components/Testimonials/index";
import NewProducts from "../../components/NewProducts/index";
import Instagram from "../../components/Instagram";
import MonthlyDeals from "../../components/MonthlyDeals/index";

type Props = {};

export type Person = {
  name: string;
  age: number;
};

const Home = (props: Props) => {
  const person1: Person = {
    name: "Hung",
    age: 22,
  };
  return (
    <HomeWrapper>
      <Container maxWidth="lg" className="Container">
        <Box
          className="ContainerGrid"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gridTemplateRows: "auto",
            margin: "auto",
            gridTemplateAreas: `"banner1"
    "banner2"
    "monthlyDeals"
    "recentNews"
    "productList"
    "testimonials"
    "instagram"
    `,
          }}
        >
          <Box
            className="banner1"
            sx={{
              gridArea: "banner1",
            }}
          >
            <BannerSlider />
          </Box>

          <Box sx={{ gridArea: "banner2", mt: 18.2 }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    bgcolor: "white",
                    height: 270,
                  }}
                >
                  <Box sx={{ p: 3.2 }}>
                    <Box sx={{ fontFamily: "Taviraj", fontSize: 28, pb: 0.8 }}>
                      Luxurious <b>Eyewear</b>
                    </Box>
                    <Box
                      sx={{
                        fontFamily: "Nunito",
                        fontSize: 16,
                        color: "#777777",
                        pb: 0.4,
                      }}
                    >
                      See the beauty of exotic world with the <br /> luxurious
                      glasses
                    </Box>
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
                      Discover Now
                    </Link>
                    <Box sx={{ ml: 20, mt: -2 }}>
                      <img src={images.Banner2} alt="Banner2" />
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    bgcolor: "white",
                    height: 270,
                  }}
                >
                  <Box sx={{ p: 3.2 }}>
                    <Box sx={{ fontFamily: "Taviraj", fontSize: 28, pb: 0.8 }}>
                      Comfortable <b>Watches</b>
                    </Box>
                    <Box
                      sx={{
                        fontFamily: "Nunito",
                        fontSize: 16,
                        color: "#777777",
                        pb: 0.4,
                      }}
                    >
                      Feels the balancing function and beauty in <br /> our
                      wooden watches
                    </Box>
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
                      Discover Now
                    </Link>
                    <Box sx={{ ml: 46, mt: -5 }}>
                      <img src={images.Banner3} alt="Banner3" />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            className="monthlyDeals"
            sx={{ gridArea: "monthlyDeals", mt: 9.2 }}
          >
            <MonthlyDeals />
          </Box>
          <Box sx={{ gridArea: "recentNews", mb: 10.5, mt: 11 }}>
            <RecentNews person={person1} />
          </Box>
          <Box sx={{ gridArea: "productList" }}>
            <NewProducts />
          </Box>
          <Box sx={{ gridArea: "testimonials" }}>
            <Testimonials />
          </Box>
          <Box sx={{ gridArea: "instagram" }}>
            <Instagram />
          </Box>
        </Box>
      </Container>
    </HomeWrapper>
  );
};

export default Home;
