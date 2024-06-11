import { Card, CardContent } from "@mui/material";
import { ReactNode } from "react";

function GameCardContainer({ children }: { children: ReactNode }) {
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
      <CardContent sx={{ padding: 0 }}>{children}</CardContent>
    </Card>
  );
}

export default GameCardContainer;
