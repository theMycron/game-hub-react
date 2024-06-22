import { Typography } from "@mui/material";
import { GameQuery } from "../../App.tsx";
import { platformsData } from "../../data/platforms.ts";
import genres from "../../data/genres.ts";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  // get platform and genre using ID
  const platform = platformsData.results.find(
    (platform) => platform.id === gameQuery.platformId,
  )?.name;

  const genre = genres.results.find(
    (genre) => genre.id === gameQuery.genreId,
  )?.name;

  const heading = `${platform ? platform : ""} ${genre ? genre : ""} Games`;

  return (
    <Typography variant="h2" fontWeight={"bold"}>
      {heading}
    </Typography>
  );
}

export default GameHeading;
