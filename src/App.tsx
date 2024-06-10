import "./App.css";
import NavBar from "./components/NavBar/NavBar.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";
import { Grid, Typography } from "@mui/material";
import FilterBar from "./components/Main/FilterBar.tsx";

function App() {
  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item sm={2}>
          <SideBar />
        </Grid>
        <Grid item sm={10} padding={2} bgcolor={"cyan"}>
          <Typography variant="h2" fontWeight={"bold"}>
            Games
          </Typography>
          <FilterBar />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
