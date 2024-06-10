import { FormControlLabel, Switch } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { ColorModeContext } from "../../App.tsx";

function ColorSwitch() {
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box sx={{ display: "flex" }}>
      <FormControlLabel
        control={
          <Switch
            onChange={(event) =>
              colorMode.toggleColorMode(event.target.checked)
            }
          ></Switch>
        }
        label={"Dark Mode"}
      />
    </Box>
  );
}

export default ColorSwitch;
