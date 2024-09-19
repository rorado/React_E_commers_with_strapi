import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const Toggle_la = () => {
  const [Language, setLanguage] = useState("En");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };
  return (
    <div>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={Language}
        onChange={handleChange}
        sx={{
          ml: 2,
          fontSize: "13px",
          height: "25px",
          width: "95px",
          color: "#f6f6f6",
          background: "#455a64",
          "& .MuiSelect-icon": {
            color: "#f6f6f6",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              "& .MuiMenuItem-root": {
                fontSize: "13px",
                height: "23px",
                width: "95px",
              },
              // "& .MuiMenuItem-root.Mui-selected": {
              //   backgroundColor: "#4CAF50",
              //   color: "#fff",
              //   "&:hover": {
              //     backgroundColor: "#388E3C",
              //   },
              // },
            },
          },
        }}
      >
        <MenuItem value="En">En</MenuItem>
        <MenuItem value="Ar">Ar</MenuItem>
        <MenuItem value="Fr">fr</MenuItem>
      </Select>
    </div>
  );
};

export default Toggle_la;
