import {
  Card,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AndroidRoundedIcon from "@mui/icons-material/AndroidRounded";
import Box from "@mui/material/Box";
import { Game } from "../../hooks/useGames.ts";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 375,
        minHeight: 340,
        borderRadius: 3,
        margin: "auto",
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <CardMedia sx={{ height: 220 }} image={game.background_image} />
        <Box px={2}>
          <Stack direction="row" justifyContent="space-between" py={1}>
            <Stack direction="row" spacing={0.5}>
              <AndroidRoundedIcon />
              <AndroidRoundedIcon />
              <AndroidRoundedIcon />
              <AndroidRoundedIcon />
              <AndroidRoundedIcon />
              <AndroidRoundedIcon />
              <AndroidRoundedIcon />
            </Stack>
            <Paper
              sx={{ paddingLeft: 1, paddingRight: 1, color: "text.secondary" }}
            >
              <Typography>{game.metacritic}</Typography>
            </Paper>
          </Stack>
          <Typography variant="h5">{game.name}</Typography>
          <Typography variant="h5">👍</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default GameCard;
