import { AppBar, Container, Toolbar } from "@mui/material";
import logo from "../../assets/logo.webp";
import Box from "@mui/material/Box";
import ColorSwitch from "./ColorSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

interface Props {
  onSearch: (value: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="img" sx={{ maxHeight: 72 }} src={logo} />
          <SearchInput onSearch={onSearch} />
          <ColorSwitch />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
