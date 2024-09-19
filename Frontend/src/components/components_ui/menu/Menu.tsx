import { useState } from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";

import "./Menu.css";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface Iprop {
  title: string;
  options?: string[];
}

const MenuCom = ({ title, options }: Iprop) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Stack>
      <Stack
        sx={{
          alignItems: "center",
          userSelect: "none",
          color: "var(--primary-text-color)",
        }}
      >
        <List>
          <ListItemButton onClick={handleClick} sx={{ width: "40vw" }}>
            <ListItemText primary={title} />
            {options && (open ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
          {options &&
            options.map((option) => (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary={option} />
                  </ListItemButton>
                </List>
              </Collapse>
            ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default MenuCom;
