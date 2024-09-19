import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { Toggle_mode } from "../toggles/Toggle_mode.tsx";
import Toggle_la from "../toggles/Toggle_la.tsx";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { FacebookOutlined } from "@mui/icons-material";

import "./Header1.css";
import ControlledTooltips from "../components_ui/tooltip/Tooltip.tsx";

const Header1 = () => {
  return (
    <Box
      sx={{
        bgcolor: "#283445",
        paddingY: "8px",
        color: "#ffffff",
        overflow: "hidden",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <Container>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#e53935",
              borderRadius: "6px",
              fontSize: "16px",
            }}
          >
            HOT
          </Typography>
          <Typography
            sx={{
              mr: 2,
              fontSize: "15px",
              fontWeight: "300",
            }}
          >
            Free exppress shipping
          </Typography>

          <Box flexGrow={1} />

          <Box className="mode">
            <Toggle_mode />
          </Box>
          <Box className="lang">
            <Toggle_la />
          </Box>

          <Box className="social_media" sx={{ display: "flex" }}>
            <IconButton>
              <ControlledTooltips title="Instagram">
                <InstagramIcon
                  sx={{
                    fontSize: 23,
                    cursor: "pointer",
                    transition: "0.3s",
                    color: "#fff",
                    ":hover": { color: "#cfd8dc" },
                  }}
                />
              </ControlledTooltips>
            </IconButton>

            <IconButton>
              <ControlledTooltips title="Facebook">
                <FacebookOutlined
                  sx={{
                    fontSize: 23,
                    cursor: "pointer",
                    transition: "0.3s",
                    color: "#fff",
                    ":hover": { color: "#cfd8dc" },
                  }}
                />
              </ControlledTooltips>
            </IconButton>

            <IconButton>
              <ControlledTooltips title="X">
                <XIcon
                  sx={{
                    fontSize: 18,
                    cursor: "pointer",
                    transition: "0.3s",
                    color: "#fff",
                    ":hover": { color: "#cfd8dc" },
                  }}
                />
              </ControlledTooltips>
            </IconButton>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
