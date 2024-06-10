import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

function FilterBar() {
  const [platformFilter, setPlatformFilter] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleChangePlatform = (event: SelectChangeEvent) => {
    setPlatformFilter(event.target.value);
  };

  const handleChangeSort = (event: SelectChangeEvent) => {
    setSortOption(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="select-platform-label">Platforms</InputLabel>
        <Select
          id="select-platform"
          labelId="select-platform-label"
          value={platformFilter}
          label="Platforms"
          onChange={handleChangePlatform}
        >
          <MenuItem value={"PC"}>PC</MenuItem>
          <MenuItem value={"PS5"}>PS5</MenuItem>
          <MenuItem value={"Switch"}>Switch</MenuItem>
        </Select>
      </FormControl>
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
