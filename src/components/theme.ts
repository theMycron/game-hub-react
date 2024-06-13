import { createTheme, PaletteMode, ThemeOptions } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: { main: "#00bc2e" },
        }
      : {
          // palette values for dark mode
          primary: { main: "#00bc2e" },
          background: {
            default: "#131313",
            paper: "#131313",
          },
          text: {
            primary: "#ffffff",
            secondary: grey[500],
          },
        }),
  },
});

export default theme;
