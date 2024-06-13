import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";

interface Props {
  onSearch: (value: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const searchQueryRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchQueryRef.current) onSearch(searchQueryRef.current.value);
      }}
      style={{ flexGrow: 2, display: "flex", marginInline: "1.5rem" }}
    >
      <FormControl fullWidth>
        <InputLabel htmlFor="search">Search</InputLabel>
        <OutlinedInput
          inputRef={searchQueryRef}
          id="search"
          label="Search"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
}

export default SearchInput;
