import Box from "@mui/material/Box";
import { Button, Stack, Typography } from "@mui/material";

function SideBar() {
  return (
    <Box>
      <Stack spacing={1} alignItems="start" padding={2}>
        <Typography variant="h5" fontWeight={"bold"}>
          Genres
        </Typography>
        <Button>Action</Button>
        <Button>Adventure</Button>
        <Button>Puzzle</Button>
      </Stack>
    </Box>
  );
}

export default SideBar;
