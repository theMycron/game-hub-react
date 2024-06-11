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
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";

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
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </Stack>
          <Typography variant="h5">{game.name}</Typography>
          <Typography variant="h5">👍</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default GameCard;
