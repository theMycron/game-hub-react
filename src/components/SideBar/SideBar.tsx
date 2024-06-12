import Box from "@mui/material/Box";
import {
  Avatar,
  CircularProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import useGenres from "../../hooks/useGenres.ts";

function SideBar() {
  const { data: genres, isLoading } = useGenres();

  return (
    <Box>
      <Stack spacing={1} alignItems="start" padding={2}>
        <Typography variant="h4" fontWeight={"bold"}>
          Genres
        </Typography>
        {isLoading && <CircularProgress />}
        <List>
          {genres.map((genre) => (
            <ListItem key={genre.id} disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    sx={{ height: 36, width: 36 }}
                    alt={genre.name}
                    src={genre.image_background}
                  />
                </ListItemAvatar>
                <ListItemText primary={genre.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
}

export default SideBar;
