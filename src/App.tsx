import "./App.css";
import NavBar from "./components/NavBar/NavBar.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";
import { createTheme, Stack, ThemeProvider, Typography } from "@mui/material";
import FilterBar from "./components/Main/FilterBar.tsx";
import GameList from "./components/Main/GameList.tsx";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Genre } from "./hooks/useGenres.ts";

export const ColorModeContext = React.createContext({
  toggleColorMode: (mode: boolean) => {},
});

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const handleGenreFilter = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  return (
    <>
      <NavBar />
      <Stack direction={{ xs: "column", sm: "row" }}>
        <Box sx={{ minWidth: 280, maxWidth: 300 }}>
          <SideBar onSelectGenre={handleGenreFilter} />
        </Box>
        <Box padding={2} display="block">
          <Typography variant="h2" fontWeight={"bold"}>
            Games
          </Typography>
          <FilterBar />
          <GameList selectedGenre={selectedGenre} />
        </Box>
      </Stack>
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: (mode: boolean) => {
        setMode(() => (mode ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
