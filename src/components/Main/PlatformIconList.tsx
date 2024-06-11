import { Platform } from "../../hooks/useGames.ts";
import { Stack } from "@mui/material";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { createElement } from "react";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {platforms.map((platform) =>
        createElement(iconMap[platform.slug], {
          fontSize: "large",
          color: "grey",
        }),
      )}
    </Stack>
  );
}

export default PlatformIconList;
