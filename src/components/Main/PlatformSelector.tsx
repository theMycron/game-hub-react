import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import usePlatforms, { Platform } from "../../hooks/usePlatforms.ts";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | string | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform = "" }: Props) {
  const { data: platforms } = usePlatforms();

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-platform-label">Platforms</InputLabel>
      <Select
        id="select-platform"
        labelId="select-platform-label"
        value={selectedPlatform}
        label="Platforms"
        onChange={(event) => {
          console.log(event.target.value);
          onSelectPlatform(event.target.value as Platform);
        }}
      >
        <MenuItem value="">All</MenuItem>
        {platforms.map((platform: Platform) => (
          <MenuItem key={platform.id} value={platform}>
            {platform.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default PlatformSelector;
