import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Rating } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import Single_product from "../product/Single_product";
import { useGetproductByNameQuery } from "../../redux/product";

interface IProp {
  title: string;
  price: number;
  img_src: string;
  desc: string;
  rating: number;
  productId: number;
}

const Main_Product = ({
  desc,
  img_src,
  price,
  rating,
  title,
  productId,
}: IProp) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data } = useGetproductByNameQuery(`products/${productId}?populate=*`);

  return (
    <Box>
      <Card
        onClick={handleOpen}
        sx={{
          width: 345,
          backgroundColor: "var(--secondary-text-color)",
          color: "var(--primary-text-color)",
          cursor: "pointer",
          "&:hover .MuiCardMedia-root": {
            transition: "0.8s",
            scale: "1.1",
          },
        }}
      >
        <CardMedia
          sx={{ minHeight: 320 }}
          image={img_src}
          title="green iguana"
        />
        <CardContent sx={{ height: 100 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" color="red" component="div">
              {price}$
            </Typography>
          </Box>

          <Typography
            variant="body2"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {desc}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button variant="text" sx={{ textTransform: "capitalize" }}>
            <AddShoppingCartIcon /> add to cart
          </Button>
          <Rating
            sx={{
              "& .MuiRating-iconEmpty": {
                color: "#777",
              },
            }}
            name="size-small"
            defaultValue={rating}
            size="medium"
            precision={0.5}
            readOnly
          />
        </CardActions>
      </Card>
      {data && (
        <Single_product data={data} handleClose={handleClose} open={open} />
      )}
    </Box>
  );
};

export default Main_Product;
