import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import usePlatforms from "../../hooks/usePlatforms.ts";
import { useState } from "react";

interface Props {
  onSelectPlatform: (platformId: number) => void;
}

function PlatformSelector({ onSelectPlatform }: Props) {
  const { data: platforms } = usePlatforms();
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-platform-label">Platforms</InputLabel>
      <Select
        id="select-platform"
        labelId="select-platform-label"
        label="Platforms"
        value={selectedPlatform}
        onChange={(event) => {
          setSelectedPlatform(event.target.value);
          onSelectPlatform(parseInt(event.target.value));
        }}
      >
        <MenuItem value="">All</MenuItem>
        {platforms.map((platform) => (
          <MenuItem key={platform.id} value={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default PlatformSelector;
