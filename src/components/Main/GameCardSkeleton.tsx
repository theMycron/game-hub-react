import { Card, CardContent, Skeleton, Stack } from "@mui/material";

function GameCardSkeleton() {
  return (
    <Card
      sx={{
        width: 375,
        minHeight: 340,
        borderRadius: 3,
        margin: "auto",
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Skeleton variant="rectangular" sx={{ minHeight: 250 }} />
        <Stack spacing={1.5} p={2}>
          <Skeleton variant="text" height={30} />
          <Skeleton variant="text" height={30} />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default GameCardSkeleton;
