import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type Anchor = "top" | "left" | "bottom" | "right";

interface Iprop {
  side: Anchor;
  openName: React.ReactElement;
  children: React.ReactElement;
}
export default function SwipeableTemporaryDrawer({
  side,
  openName,
  children,
}: Iprop) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "var(--secondary-text-color)",
        minHeight: "100vh",
        height: "100%",
      }}
      role="presentation"
    >
      <IconButton
        onClick={toggleDrawer(side, false)}
        sx={{ position: "fixed", right: 5, top: 6 }}
      >
        <Close
          sx={{
            color: "var(--primary-text-color)",
            fontSize: "36px",
            "&:hover": { color: "primary.main" },
          }}
        />
      </IconButton>
      <div style={{ marginTop: "80px" }}>{children}</div>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={side}>
        <Button onClick={toggleDrawer(side, true)}>{openName}</Button>
        <SwipeableDrawer
          anchor={side}
          open={state[side]}
          onOpen={toggleDrawer(side, true)}
          onClose={toggleDrawer(side, false)}
        >
          {list(side)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
