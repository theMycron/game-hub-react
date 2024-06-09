import "./App.css";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 800 }}>
        <Typography variant="h1" gutterBottom>
          Game Hub Website
        </Typography>
        <Button variant="outlined">Click ME!</Button>
      </Box>
    </>
  );
}

export default App;
