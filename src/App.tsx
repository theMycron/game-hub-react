import "./App.css";
import NavBar from "./components/NavBar/NavBar.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";
import { Stack, Typography } from "@mui/material";
import FilterBar from "./components/Main/FilterBar.tsx";
import GameList from "./components/Main/GameList.tsx";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
      <NavBar />
      <Stack direction={{ xs: "column", sm: "row" }}>
        <Box sx={{ minWidth: 240, maxWidth: 300 }}>
          <SideBar />
        </Box>
        <Box padding={2} bgcolor={"cyan"} display="block">
          <Typography variant="h2" fontWeight={"bold"}>
            Games
          </Typography>
          <FilterBar />
          <GameList />
        </Box>
      </Stack>
    </>
  );
}

export default App;
