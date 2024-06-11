import { Paper, Typography } from "@mui/material";
import { green, yellow, red } from "@mui/material/colors";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const bgColor = score > 75 ? green[50] : score > 60 ? yellow[50] : red[50];
  const textColor =
    score > 75 ? green[800] : score > 60 ? yellow[800] : red[800];

  return (
    <Paper
      sx={{
        paddingLeft: 1,
        paddingRight: 1,
        bgcolor: bgColor,
        color: textColor,
      }}
    >
      <Typography>{score}</Typography>
    </Paper>
  );
}

export default CriticScore;
