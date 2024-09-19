import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

interface Iprop {
  children: React.ReactElement;
  title: string;
}

export default function ControlledTooltips({ children, title }: Iprop) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Tooltip
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      title={title}
    >
      {children}
    </Tooltip>
  );
}
