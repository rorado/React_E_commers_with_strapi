import useLocalStorage from "use-local-storage";
import { useEffect } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

type model_tp = "System" | "Light" | "Dark";

export const Toggle_mode = () => {
  const preference = window.matchMedia("(prefers-color-scheme: Dark)").matches;
  const [isDark, setIsDark] = useLocalStorage<model_tp>("isDark", "Light");

  function updateCSSVariable(model: boolean) {
    if (model) {
      document.documentElement.style.setProperty(
        "--background-color",
        "#272727"
      );
      document.documentElement.style.setProperty(
        "--background-color-header",
        "#252424"
      );
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "#f6f6f6"
      );
      document.documentElement.style.setProperty(
        "--secondary-text-color",
        "#212121"
      );
    } else {
      document.documentElement.style.setProperty(
        "--background-color",
        "#f1f1f1"
      );
      document.documentElement.style.setProperty(
        "--background-color-header",
        "#fff"
      );
      document.documentElement.style.setProperty(
        "--primary-text-color",
        "#212121"
      );
      document.documentElement.style.setProperty(
        "--secondary-text-color",
        "#ffff"
      );
    }
  }

  function handleChange(e: SelectChangeEvent) {
    const newMode = e.target.value as model_tp;
    if (newMode === "System") {
      setIsDark("System");
    } else if (newMode === "Light") {
      setIsDark("Light");
    } else if (newMode === "Dark") {
      setIsDark("Dark");
    }
  }

  useEffect(() => {
    if (isDark == "Light") {
      updateCSSVariable(false);
    } else if (isDark == "Dark") {
      updateCSSVariable(true);
    } else if (isDark == "System") {
      updateCSSVariable(preference);
    }
  }, [isDark, preference]);

  return (
    <Select
      labelId="demo-simple-select-label"
      value={isDark}
      label={isDark}
      id="demo-simple-select-error"
      onChange={handleChange}
      sx={{
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
    >
      <MenuItem
        value="Light"
        sx={{
          // "&:hover": {
          //   backgroundColor: "var(--secondary-text-color)",
          //   color: "var(--primary-text-color)",
          // },
          fontSize: "13px",
          height: "25px",
          width: "95px",
        }}
      >
        Light
      </MenuItem>
      <MenuItem
        value="Dark"
        sx={{
          fontSize: "13px",
          height: "25px",
          width: "95px",
        }}
      >
        Dark
      </MenuItem>
      <MenuItem
        value="System"
        sx={{
          fontSize: "13px",
          height: "25px",
          width: "95px",
        }}
      >
        System
      </MenuItem>
    </Select>
  );
};
