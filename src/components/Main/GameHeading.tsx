import { Typography } from "@mui/material";
import { GameQuery } from "../../App.tsx";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  return (
    <Typography variant="h2" fontWeight={"bold"}>
      {heading}
    </Typography>
  );
}

export default GameHeading;
