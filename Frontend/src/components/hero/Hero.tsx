import {
  Stack,
  Box,
  Button,
  Container,
  Link,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import "./Hero.css";

const mySlider = [
  { gender: "MEN", src: "src/public/images/banner-15.jpg" },
  { gender: "WOMEN", src: "src/public/images/banner-25.jpg" },
];

const Hero = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container
      className="container"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "3px",
        mt: 2,
        maxHeight: "450px",
      }}
    >
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {mySlider.map((item) => (
          <SwiperSlide key={item.gender}>
            {isSmallScreen && <img src={item.src} />}

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                [theme.breakpoints.up("md")]: {
                  left: 95,
                  textAlign: "left",
                },
                [theme.breakpoints.down("md")]: {
                  left: "50%",
                  transform: "translate(-50% , -50%)",
                  textAlign: "center",
                  py: 4,
                },

                color: "#1f2937",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4">LIFSTILE COLLECTION</Typography>
              <Typography variant="h3" sx={{ fontWeight: "800" }}>
                {item.gender}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "550" }}>
                SALE UP TO <span style={{ color: "red" }}> 30% OFF</span>
              </Typography>
              <Typography variant="h5">
                Get Free Shipping on orders over $99.00
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: "#1f2937",
                  width: "200px",
                  height: "50px",
                  fontSize: "18px",
                  mx: "auto",
                }}
              >
                Shop Now
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {matches && (
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Box sx={{ position: "relative", flexGrow: 1 }}>
            <img
              width={"100%"}
              height={"100%"}
              src="src/public/images/banner-17.jpg"
              alt=""
            />

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                SUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                SALE 20% OFF
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative", flexGrow: 1 }}>
            <img
              width={"100%"}
              height={"100%"}
              src="src/public/images/banner-16.jpg"
              alt=""
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                  fontWeight: 300,
                }}
              >
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                DESKTOPS &
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                LAPTOPS
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </div>
      )}
    </Container>
  );
};

export default Hero;
