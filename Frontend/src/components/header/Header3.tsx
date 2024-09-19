import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useState } from "react";
import { Container, Divider, Stack, Box } from "@mui/material";

import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import ComputerIcon from "@mui/icons-material/Computer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";

import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SwipeableTemporaryDrawer from "../components_ui/demo/Demo";
import MenuCom from "../components_ui/menu/Menu";
import Tollips from "../components_ui/toolips/Tollips";

import "./Header3.css";
import { Toggle_mode } from "../toggles/Toggle_mode";
import Toggle_la from "../toggles/Toggle_la";

const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ backgroundColor: "var(--background-color-header)" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "var(--primary-text-color)",
          py: 2,
        }}
      >
        <Stack sx={{ color: "#fff" }}>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              bgcolor: "#ffffff13",
              border: "1px solid #777",
              borderRadius: "15px",
              padding: "0",
              "& .MuiButtonBase-root": { padding: "5px" },
            }}
          >
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ color: "var(--primary-text-color)", borderRadius: "15px" }}
            >
              <CategorySharpIcon sx={{ mr: 1 }} />
              <ListItemText
                sx={{
                  mr: 2,
                  "& .MuiListItemText-primary ": { fontSize: "20px" },
                }}
                primary="Categorey"
              />
              {open ? (
                <KeyboardArrowUpSharpIcon />
              ) : (
                <KeyboardArrowDownSharpIcon />
              )}
            </ListItemButton>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
            slotProps={{
              paper: {
                sx: {
                  minWidth: anchorEl
                    ? `${anchorEl.getBoundingClientRect().width}px`
                    : "auto",
                  backgroundColor: "var(--secondary-text-color)",
                  color: "var(--primary-text-color)",
                },
              },
            }}
          >
            <MenuItem onClick={handleMenuItemClick}>
              <ListItemIcon>
                <BikeScooterIcon sx={{ color: "var(--primary-text-color)" }} />
              </ListItemIcon>
              <ListItemText>Bikes</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleMenuItemClick}>
              <ListItemIcon>
                <ComputerIcon sx={{ color: "var(--primary-text-color)" }} />
              </ListItemIcon>
              <ListItemText>Electronics</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleMenuItemClick}>
              <ListItemIcon>
                <MenuBookIcon sx={{ color: "var(--primary-text-color)" }} />
              </ListItemIcon>
              <ListItemText>Books</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleMenuItemClick}>
              <ListItemIcon>
                <SportsEsportsOutlinedIcon
                  sx={{ color: "var(--primary-text-color)" }}
                />
              </ListItemIcon>
              <ListItemText>Games</ListItemText>
            </MenuItem>
          </Menu>
        </Stack>

        <Stack
          className="menu-large"
          sx={{ flexDirection: "row", alignItems: "center", gap: "25px" }}
        >
          <Tollips
            options={["Link1", "Link2", "Link3", "Link4"]}
            title="Home"
          />
          <Tollips
            options={["Link1", "Link2", "Link3", "Link4"]}
            title="Mega menu"
          />
          <Tollips
            options={["Link1", "Link2", "Link3", "Link4"]}
            title="Full screen menu"
          />
          <Tollips
            options={["Link1", "Link2", "Link3", "Link4"]}
            title="Pages"
          />
        </Stack>
        <div className="menu-small">
          <SwipeableTemporaryDrawer
            side="top"
            openName={
              <MenuIcon
                sx={{
                  fontSize: "30px",
                  color: "var(--primary-text-color)",
                  "&:hover ": { color: "primary.main" },
                }}
              />
            }
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <MenuCom title="Home" options={["hello ", "hello world"]} />
              <Divider style={{ width: "40%", backgroundColor: "#53535360" }} />
              <MenuCom title="Mega menu" options={["hello ", "hello world"]} />
              <Divider style={{ width: "40%", backgroundColor: "#53535360" }} />
              <MenuCom
                title="Full screen menu"
                options={["hello ", "hello world"]}
              />
              <Divider style={{ width: "40%", backgroundColor: "#53535360" }} />
              <MenuCom title="Pages" options={["hello ", "hello world"]} />
              <Divider style={{ width: "40%", backgroundColor: "#53535360" }} />
              <MenuCom
                title="Use account"
                options={["hello ", "hello world"]}
              />
              <Divider style={{ width: "40%", backgroundColor: "#53535360" }} />
              <MenuCom title="Vendor account" />

              <div style={{ position: "fixed", top: "15px", left: "20px" }}>
                <Toggle_mode />
              </div>
              <div style={{ position: "fixed", top: "45px", left: "5px" }}>
                <Toggle_la />
              </div>
            </div>
          </SwipeableTemporaryDrawer>
        </div>
      </Container>
    </Box>
  );
};

export default Header3;
