import { useState } from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";

import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";

interface Iprop {
  title: string;
  options: string[];
}

const Tollips = ({ options, title }: Iprop) => {
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [option, setOption] = useState<string>("");

  const handleToggle = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Tooltip
      slotProps={{
        tooltip: {
          sx: {
            display: "flex",
            bgcolor: "var(--secondary-text-color)",
          },
        },
      }}
      title={
        <List
          sx={{
            borderRadius: "15px",
          }}
        >
          {options.map((option) => (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{
                    color: "var(--primary-text-color)",
                    width: "200px",
                    textAlign: "center",
                    "&:hover": {
                      bgcolor: "#302f2f0a",
                    },
                  }}
                  key={option}
                  onClick={() => {
                    handleClose();
                    setOption(option);
                  }}
                >
                  <ListItemText primary={option} />
                </ListItemButton>
              </List>
            </Collapse>
          ))}
        </List>
      }
      open={open}
      onClose={handleClose}
      onMouseEnter={handleToggle}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          gutterBottom
          sx={{
            color: open ? "primary.main" : "var(--primary-text-color)",
            fontSize: "21px",
            transition: "0.2s",
            minWidth: "60px",
            whiteSpace: "nowrap",
            cursor: "pointer",
          }}
        >
          {title}
        </Typography>
        {open ? (
          <KeyboardArrowUpSharpIcon
            sx={{
              color: open ? "primary.main" : "var(--primary-text-color)",
              transition: "0.8s",
              cursor: "pointer",
            }}
          />
        ) : (
          <KeyboardArrowDownSharpIcon
            sx={{
              color: open ? "red" : "var(--primary-text-color)",
              transition: "0.8s",
              cursor: "pointer",
            }}
          />
        )}
      </div>
    </Tooltip>
  );
};

export default Tollips;
