import "./App.css";
import NavBar from "./components/NavBar/NavBar.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";
import {
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import FilterBar from "./components/Main/FilterBar.tsx";
import GameList from "./components/Main/GameList.tsx";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { Genre } from "./hooks/useGenres.ts";
import { Platform } from "./hooks/usePlatforms.ts";

export const ColorModeContext = React.createContext({
  toggleColorMode: (mode: boolean) => {},
});

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleGenreFilter = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const handlePlatformFilter = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const handleSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  return (
    <>
      <NavBar />
      <Stack direction={{ xs: "column", sm: "row" }}>
        <Box sx={{ minWidth: 280, maxWidth: 300 }}>
          <SideBar
            onSelectGenre={handleGenreFilter}
            selectedGenre={gameQuery.genre}
          />
        </Box>
        <Box padding={2} display="block">
          <Typography variant="h2" fontWeight={"bold"}>
            Games
          </Typography>
          <FilterBar
            onSelectPlatform={handlePlatformFilter}
            selectedPlatform={gameQuery.platform}
            onSelectSortOrder={handleSortOrder}
            selectedSortOrder={gameQuery.sortOrder}
          />
          <GameList gameQuery={gameQuery} />
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
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
