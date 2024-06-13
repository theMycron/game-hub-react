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
import { useState } from "react";

interface Props {
  onSelectGenre: (genreId: number) => void;
}

function SideBar({ onSelectGenre }: Props) {
  const { data: genres, isLoading } = useGenres();

  const [selectedGenre, setSelectedGenre] = useState<number>();

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
              <ListItemButton
                selected={genre.id === selectedGenre}
                onClick={() => {
                  setSelectedGenre(genre.id);
                  onSelectGenre(genre.id);
                }}
              >
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
