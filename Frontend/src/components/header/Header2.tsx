import {
  Badge,
  BadgeProps,
  Box,
  Container,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import ControlledTooltips from "../components_ui/tooltip/Tooltip";

import "./Header2.css";
import AlertDialog from "../components_ui/search/search";

const options = ["All Categories", "CAR", "Clothers", "Electronics"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.05),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  height: "50px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "80%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "22vw",
      "&:focus": {
        width: "25vw",
      },
    },
  },
}));

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (
    _event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
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
        }}
      >
        <Stack sx={{ alignItems: "center", py: 5 }}>
          <ShoppingCartOutlinedIcon sx={{ cursor: "pointer" }} />
          <Typography
            variant="body2"
            gutterBottom
            sx={{ whiteSpace: "nowrap" }}
          >
            E-commerce
          </Typography>
        </Stack>

        <Stack>
          <Search
            className="search_header2"
            sx={{ borderRadius: "30px", display: "flex" }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <div style={{ width: "100%", height: "50px" }}>
              <List
                component="nav"
                aria-label="Device settings"
                sx={{
                  bgcolor: "#777",
                  borderBottomRightRadius: "30px",
                  borderTopRightRadius: "30px",
                  whiteSpace: "nowrap",
                  height: "100%",
                  "& .MuiListItem-root": { height: "100%" },
                }}
              >
                <ListItem
                  id="lock-button"
                  aria-haspopup="listbox"
                  aria-controls="lock-menu"
                  aria-label="when device is locked"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClickListItem}
                  sx={{
                    cursor: "pointer",
                    color: "#fff",
                    display: "flex",
                  }}
                >
                  <ListItemText
                    secondary={options[selectedIndex]}
                    sx={{
                      "& .MuiTypography-root": {
                        color: "#fff",
                      },
                    }}
                  />
                  <KeyboardArrowDownIcon />
                </ListItem>
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
              >
                {options.map((option, index) => (
                  <MenuItem
                    key={option}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                    sx={{ fontSize: "14px" }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Search>
        </Stack>

        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "15px" }}>
          <div className="search_ic_header2">
            <AlertDialog title_in="Search..">
              <SearchIcon
                sx={{ color: "var(--primary-text-color)", fontSize: "28px" }}
              />
            </AlertDialog>
          </div>

          <IconButton aria-label="shopping">
            <ControlledTooltips title="Shopping">
              <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartIcon
                  sx={{ color: "var(--primary-text-color)", fontSize: "28px" }}
                />
              </StyledBadge>
            </ControlledTooltips>
          </IconButton>

          <IconButton>
            <ControlledTooltips title="Login">
              <AccountCircleOutlinedIcon
                sx={{ color: "var(--primary-text-color)", fontSize: "28px" }}
              />
            </ControlledTooltips>
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header2;
