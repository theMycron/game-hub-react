import {
  AppBar,
  Container,
  FormControlLabel,
  InputAdornment,
  Switch,
  TextField,
  Toolbar,
} from "@mui/material";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <VideogameAssetIcon sx={{ display: "flex", mr: 1, fontSize: 40 }} />
          <Box sx={{ flexGrow: 2, display: "flex" }}>
            <TextField
              id="search"
              sx={{ m: 1 }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <FormControlLabel control={<Switch></Switch>} label={"Dark Mode"} />
          </Box>

          {/*<VideogameAssetIcon*/}
          {/*  sx={{ display: { xs: "flex", md: "none" }, mr: 1, fontSize: 40 }}*/}
          {/*/>*/}
          {/*<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>*/}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
