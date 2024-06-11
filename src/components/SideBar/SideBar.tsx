import Box from "@mui/material/Box";
import { Button, Stack, Typography } from "@mui/material";
import useGenres from "../../hooks/useGenres.ts";

function SideBar() {
  const { data: genres } = useGenres();

  return (
    <Box>
      <Stack spacing={1} alignItems="start" padding={2}>
        <Typography variant="h5" fontWeight={"bold"}>
          Genres
        </Typography>
        {genres.map((genre) => (
          <Button key={genre.id}>{genre.name}</Button>
        ))}
      </Stack>
    </Box>
  );
}

export default SideBar;
