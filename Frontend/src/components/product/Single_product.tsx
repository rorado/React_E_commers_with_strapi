import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Backdrop, Box, Button, Fade, Modal, Typography } from "@mui/material";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import "./styles_sp.css";

import { Key, useEffect, useRef, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "var(--background-color-header)",
  boxShadow: 24,
  color: "var(--primary-text-color)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 1,
  border: "none",
  overflow: "hidden",
};

interface IProp {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  handleClose: () => void;
  open: boolean;
}

const Single_product = ({ handleClose, open, data }: IProp) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [imageUrl, setImageUrl] = useState(data.data.product_img[0].url);

  const updateWidth = () => {
    if (boxRef.current) {
      setWidth(boxRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(updateWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box sx={{ flexGrow: 1 }}>
            <img
              src={imageUrl}
              style={{
                objectFit: "cover",
                // width: "100%",
                height: "300px",
              }}
              alt="Paella dish"
            />
          </Box>

          <Box ref={boxRef} sx={{ flexGrow: 1, width: "100%", px: "6%" }}>
            <Typography variant="h4">{data.data.product_title}</Typography>
            <Typography variant="h4" color="red">
              {data.data.product_price}$
            </Typography>
            <Typography variant="body1" sx={{ my: 1 }}>
              {data.data.product_desc}
            </Typography>

            <Swiper
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                400: {
                  slidesPerView: 1,
                },
                540: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="mySwiper"
              style={{ maxWidth: width }}
            >
              {data &&
                data.data.product_img.map(
                  (item: { id: Key | null | undefined; url: string }) => (
                    <SwiperSlide key={item.id}>
                      <img
                        src={item.url}
                        alt={`Product ${item.id}`}
                        onClick={() => setImageUrl(item.url)}
                      />
                    </SwiperSlide>
                  )
                )}
            </Swiper>

            <Button
              sx={{ my: 3 }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<AddShoppingCartIcon />}
            >
              Add To Card
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Single_product;
