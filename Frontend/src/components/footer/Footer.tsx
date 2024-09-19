import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--background-color-header)",
        minHeight: "100px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100px",
        }}
      >
        <Typography variant="h5">Rorado ©{new Date().getFullYear()}</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
