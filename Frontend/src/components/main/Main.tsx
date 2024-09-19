import { Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Key, useEffect, useState } from "react";
import Main_Product from "./Main_product";
import { useGetproductByNameQuery } from "../../redux/product";

export default function ColorToggleButton() {
  const [alignment, setAlignment] = useState("all");

  const [productsCategory, setProductsCategory] = useState<string>(
    "products?populate=*"
  );

  const { data, error, isLoading } = useGetproductByNameQuery(productsCategory);
  // const [delayedData, setDelayedData] = useState(null);

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      if (newAlignment == "men") {
        setProductsCategory(
          "products?populate=*&filters[product_category][$eq]=men"
        );
      } else if (newAlignment == "women") {
        setProductsCategory(
          "products?populate=*&filters[product_category][$eq]=women"
        );
      } else {
        setProductsCategory("products?populate=*");
      }
    }
  };

  // useEffect(() => {
  //   if (data) {
  //     const timer = setTimeout(() => {
  //       setDelayedData(data);
  //     }, 2000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [data]);

  return (
    <Container sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "space-between",
        }}
      >
        <Stack>
          <Typography variant="h4" gutterBottom>
            Selected Products
          </Typography>
          <Typography variant="body2" gutterBottom sx={{ color: "#666363" }}>
            All owr new arrival in a exclusive brand selection
          </Typography>
        </Stack>
        <Stack>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Options Categorys"
          >
            <ToggleButton
              value="all"
              sx={{
                color: "var(--primary-text-color)",
                border: "1px solid var(--primary-text-color)",
              }}
            >
              All Products
            </ToggleButton>
            <ToggleButton
              value="men"
              sx={{
                color: "var(--primary-text-color)",
                border: "1px solid var(--primary-text-color)",
              }}
            >
              Men Category
            </ToggleButton>
            <ToggleButton
              value="women"
              sx={{
                color: "var(--primary-text-color)",
                border: "1px solid var(--primary-text-color)",
              }}
            >
              Women Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Box>
      <Box
        sx={{
          my: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            xs: "center",
            lg: "space-between",
          },
          gap: "15px",
        }}
      >
        {isLoading &&
          Array(6)
            .fill(null)
            .map(() => (
              <Stack spacing={1}>
                <Skeleton variant="rectangular" width={345} height={260} />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "2rem", width: "30%" }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "2rem", width: "30%" }}
                  />
                </Box>
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "100%" }}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: "100%" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Skeleton variant="rectangular" width={"30%"} height={20} />
                  <Skeleton variant="rounded" width={"30%"} height={20} />
                </Box>
              </Stack>
            ))}

        {data &&
          data.data.map(
            (item: {
              id: Key | null | undefined | number;
              attributes: {
                product_desc: string;
                product_price: number;
                product_rating: number;
                product_title: string;
                product_img: { data: { attributes: { url: string } }[] };
              };
            }) => (
              <Main_Product
                key={item.id}
                productId={item.id}
                desc={item.attributes.product_desc}
                price={item.attributes.product_price}
                rating={item.attributes.product_rating}
                title={item.attributes.product_title}
                img_src={`${import.meta.env.VITE_BASE_URL}${
                  item.attributes.product_img.data[0].attributes.url
                }`}
              />
            )
          )}
      </Box>
    </Container>
  );
}
