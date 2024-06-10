import {
  Card,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AndroidRoundedIcon from "@mui/icons-material/AndroidRounded";
import Box from "@mui/material/Box";

interface Props {
  title: string;
  score: number;
}

function GameCard({ title, score }: Props) {
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
      <CardContent sx={{ padding: 0 }}>
        <CardMedia
          sx={{ height: 180 }}
          image="https://npr.brightspotcdn.com/dims4/default/2ac3bf0/2147483647/strip/true/crop/616x353+0+0/resize/880x504!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F5e%2F18%2F3075f4a34ace9caaac2f434c2b03%2Fhollow-knight-wide-cover.jpeg"
        />
        <Box px={2}>
          <Stack direction="row" justifyContent="space-between" py={1}>
            <Stack direction="row" spacing={0.5}>
              <AndroidRoundedIcon />
              <AndroidRoundedIcon />
              <AndroidRoundedIcon />
              <AndroidRoundedIcon />
              <AndroidRoundedIcon />
              <AndroidRoundedIcon />
              <AndroidRoundedIcon />
            </Stack>
            <Paper
              sx={{ paddingLeft: 1, paddingRight: 1, color: "text.secondary" }}
            >
              <Typography>{score}</Typography>
            </Paper>
          </Stack>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h5">👍</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default GameCard;
