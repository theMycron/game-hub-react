import "./App.css";
import NavBar from "./components/NavBar/NavBar.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  Stack,
  ThemeProvider,
} from "@mui/material";
import FilterBar from "./components/Main/FilterBar.tsx";
import GameList from "./components/Main/GameList.tsx";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import GameHeading from "./components/Main/GameHeading.tsx";
import { getDesignTokens } from "./components/theme.ts";

export const ColorModeContext = React.createContext<{
  toggleColorMode: (mode: boolean) => void;
}>({
  toggleColorMode: () => {},
});

export interface GameQuery {
  genreId: number;
  platformId: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleGenreFilter = (genreId: number) => {
    setGameQuery({ ...gameQuery, genreId });
  };

  const handlePlatformFilter = (platformId: number) => {
    setGameQuery({ ...gameQuery, platformId });
  };

  const handleSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  const handleSearch = (value: string) => {
    setGameQuery({ ...gameQuery, searchText: value });
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <Stack direction={"row"}>
        <Box
          sx={{
            minWidth: 280,
            maxWidth: 300,
            display: { xs: "none", sm: "block" },
          }}
        >
          <SideBar onSelectGenre={handleGenreFilter} />
        </Box>
        <Box padding={2} display="block">
          <GameHeading gameQuery={gameQuery} />
          <FilterBar
            onSelectPlatform={handlePlatformFilter}
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
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: (mode: boolean) => {
        setMode(() => (mode ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
