import { Skeleton, Stack } from "@mui/material";
import GameCardContainer from "./GameCardContainer.tsx";

function GameCardSkeleton() {
  return (
    <GameCardContainer>
      <Skeleton
        variant="rectangular"
        sx={{ display: "block", minHeight: 250 }}
      />
      <Stack spacing={1.5} p={2}>
        <Skeleton variant="text" height={30} />
        <Skeleton variant="text" height={30} />
      </Stack>
    </GameCardContainer>
  );
}

export default GameCardSkeleton;
