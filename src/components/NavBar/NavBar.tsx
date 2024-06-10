import {
  AppBar,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Toolbar,
} from "@mui/material";
import logo from "../../assets/logo.webp";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import ColorSwitch from "./ColorSwitch.tsx";

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="img" sx={{ maxHeight: 72 }} src={logo} />
          <FormControl sx={{ flexGrow: 2, display: "flex", mx: 3 }}>
            <InputLabel htmlFor="search">Search</InputLabel>
            <OutlinedInput
              id="search"
              label="Search"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <ColorSwitch />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
