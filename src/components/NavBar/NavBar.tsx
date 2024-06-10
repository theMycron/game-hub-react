import {
  AppBar,
  Container,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Switch,
  Toolbar,
} from "@mui/material";
import logo from "../../assets/logo.webp";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { ChangeEvent } from "react";

interface Props {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function NavBar({ onChange }: Props) {
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
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              control={<Switch onChange={onChange}></Switch>}
              label={"Dark Mode"}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
