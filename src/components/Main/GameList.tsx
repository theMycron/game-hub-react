import { Alert, Grid, Typography } from "@mui/material";
import GameCard from "./GameCard.tsx";
import { useEffect, useState } from "react";
import apiClient from "../../services/api-client.ts";

// const gameList = [
//   { title: "Hollow Knight", score: 93 },
//   { title: "Celeste", score: 90 },
//   { title: "Elden Ring", score: 97 },
//   { title: "Noel: The Mortal Fate", score: 84 },
//   { title: "A Difficult Game About Climbing", score: 80 },
//   { title: "A Difficult Game About Climbing With Long Ass Name", score: 60 },
// ];

interface Game {
  id: number;
  name: string;
  rating: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function GameList() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <Grid
        py={2}
        container
        spacing={3}
        columns={{ xs: 1, md: 2, lg: 3, xl: 4 }}
      >
        {games.map((game) => (
          <Grid item xs={1} key={game.id}>
            <GameCard title={game.name} score={game.rating} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default GameList;
