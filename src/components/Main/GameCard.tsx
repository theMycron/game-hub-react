import { CardMedia, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Game } from "../../hooks/useGames.ts";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../../services/image-url.ts";
import GameCardContainer from "./GameCardContainer.tsx";
import Emoji from "./Emoji.tsx";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <GameCardContainer>
      <CardMedia
        sx={{ minHeight: 250 }}
        image={getCroppedImageUrl(game.background_image)}
      />
      <Box px={2}>
        <Stack direction="row" justifyContent="space-between" py={1}>
          <PlatformIconList
            platforms={game?.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Stack>
        <Typography variant="h5" gutterBottom>
          {game.name}
        </Typography>
        <Emoji rating={game.rating_top} />
      </Box>
    </GameCardContainer>
  );
}

export default GameCard;
