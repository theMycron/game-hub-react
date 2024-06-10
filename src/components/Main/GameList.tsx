import { Grid } from "@mui/material";
import GameCard from "./GameCard.tsx";

const gameList = [
  { title: "Hollow Knight", score: 93 },
  { title: "Celeste", score: 90 },
  { title: "Elden Ring", score: 97 },
  { title: "Noel: The Mortal Fate", score: 84 },
  { title: "A Difficult Game About Climbing", score: 80 },
  { title: "A Difficult Game About Climbing With Long Ass Name", score: 60 },
];

function GameList() {
  return (
    <Grid py={2} container spacing={3} columns={{ xs: 1, md: 2, lg: 3, xl: 4 }}>
      {gameList.map((game) => (
        <Grid item xs={1} key={game.title}>
          <GameCard title={game.title} score={game.score} />
        </Grid>
      ))}
    </Grid>
  );
}

export default GameList;
