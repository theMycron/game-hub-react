import Box from "@mui/material/Box";
import PlatformSelector from "./PlatformSelector.tsx";
import SortSelector from "./SortSelector.tsx";

interface Props {
  onSelectPlatform: (platformId: number) => void;
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

function FilterBar({
  onSelectPlatform,
  onSelectSortOrder,
  selectedSortOrder,
}: Props) {
  const handleChangeSort = (option: string) => {
    onSelectSortOrder(option);
  };

  return (
    <Box>
      <PlatformSelector onSelectPlatform={onSelectPlatform} />
      <SortSelector
        selectedOption={selectedSortOrder}
        onSelectOption={(option) => handleChangeSort(option)}
      />
    </Box>
  );
}

export default FilterBar;
