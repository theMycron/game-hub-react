import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

function SortSelector({ selectedOption = "", onSelectOption }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-order-label">Order by</InputLabel>
      <Select
        id="select-order"
        labelId="select-order-label"
        label="Order by"
        value={selectedOption}
        onChange={(event) => onSelectOption(event.target.value)}
      >
        {sortOrders.map((order) => (
          <MenuItem key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SortSelector;
