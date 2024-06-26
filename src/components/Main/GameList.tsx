import { Alert, Grid } from "@mui/material";
import GameCard from "./GameCard.tsx";
import useGames from "../../hooks/useGames.ts";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import { GameQuery } from "../../App.tsx";

// const gameList = [
//   { title: "Hollow Knight", score: 93 },
//   { title: "Celeste", score: 90 },
//   { title: "Elden Ring", score: 97 },
//   { title: "Noel: The Mortal Fate", score: 84 },
//   { title: "A Difficult Game About Climbing", score: 80 },
//   { title: "A Difficult Game About Climbing With Long Ass Name", score: 60 },
// ];

interface Props {
  gameQuery: GameQuery;
}

function GameList({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery);

  if (error) return <Alert severity="error">{error}</Alert>;
  return (
    <>
      <Grid
        py={2}
        container
        spacing={3}
        columns={{ xs: 1, md: 2, lg: 3, xl: 4 }}
      >
        {isLoading &&
          Array.from(Array(8).keys()).map((_, i) => (
            <Grid item xs={1} key={i}>
              <GameCardSkeleton />
            </Grid>
          ))}
        {games.map((game) => (
          <Grid item xs={1} key={game.id}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default GameList;
