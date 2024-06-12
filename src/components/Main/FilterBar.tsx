import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import PlatformSelector from "./PlatformSelector.tsx";
import { Platform } from "../../hooks/usePlatforms.ts";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | string;
}

function FilterBar({ onSelectPlatform, selectedPlatform }: Props) {
  const [sortOption, setSortOption] = useState("");

  const handleChangeSort = (event: SelectChangeEvent) => {
    setSortOption(event.target.value);
  };

  return (
    <Box>
      <PlatformSelector
        onSelectPlatform={onSelectPlatform}
        selectedPlatform={selectedPlatform}
      />
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="select-order-label">Order by</InputLabel>
        <Select
          id="select-order"
          labelId="select-order-label"
          value={sortOption}
          label="Order by"
          onChange={handleChangeSort}
        >
          <MenuItem value={"Relevance"}>Relevance</MenuItem>
          <MenuItem value={"Title"}>Title</MenuItem>
          <MenuItem value={"Rating"}>Rating</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterBar;
