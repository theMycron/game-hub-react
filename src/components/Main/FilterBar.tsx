import Box from "@mui/material/Box";
import PlatformSelector from "./PlatformSelector.tsx";
import { Platform } from "../../hooks/usePlatforms.ts";
import SortSelector from "./SortSelector.tsx";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | string;
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

function FilterBar({
  onSelectPlatform,
  selectedPlatform,
  onSelectSortOrder,
  selectedSortOrder,
}: Props) {
  const handleChangeSort = (option: string) => {
    onSelectSortOrder(option);
  };

  return (
    <Box>
      <PlatformSelector
        onSelectPlatform={onSelectPlatform}
        selectedPlatform={selectedPlatform}
      />
      <SortSelector
        selectedOption={selectedSortOrder}
        onSelectOption={(option) => handleChangeSort(option)}
      />
    </Box>
  );
}

export default FilterBar;
