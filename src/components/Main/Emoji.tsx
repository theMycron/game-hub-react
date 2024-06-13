import bullsEye from "../../assets/bulls-eye.webp";
import thumbsUp from "../../assets/thumbs-up.webp";
import meh from "../../assets/meh.webp";
import Box from "@mui/material/Box";

interface Props {
  rating: number;
}

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

function Emoji({ rating }: Props) {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", width: 32, height: 32 },
    4: { src: thumbsUp, alt: "recommended", width: 32, height: 32 },
    5: { src: bullsEye, alt: "exceptional", width: 42, height: 42 },
  };

  const imageProps = emojiMap[rating];

  return <Box component="img" {...imageProps} />;
}

export default Emoji;
