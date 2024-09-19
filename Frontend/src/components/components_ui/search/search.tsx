import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Box, IconButton, TextField } from "@mui/material";

interface Iprop {
  children: React.ReactElement;
  title_in: string;
}

export default function AlertDialog({ children, title_in }: Iprop) {
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClickOpen = () => {
    setOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton aria-label="shopping" onClick={handleClickOpen}>
        {children}
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Box
            component="form"
            sx={{ "& > :not(style)": { width: "30ch" } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              id="outlined-basic"
              label={title_in}
              variant="outlined"
              inputRef={inputRef}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#1565c0",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#1565c0",
                },
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
