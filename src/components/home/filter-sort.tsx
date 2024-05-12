import { useFilterOptions } from "@/stores/product/hooks";
import RadioInput from "./radio-input";
import { setFilterOptions } from "@/stores/product/actions";

interface SortOption {
  label: string;
  value: string;
}

const FilterSort = ({ screen }: { screen: string }) => {
  const filterOptions = useFilterOptions();
  const sortOptions: SortOption[] = [
    {
      label: "Old to New",
      value: "old-new",
    },
    {
      label: "New to Old",
      value: "new-old",
    },
    {
      label: "Price Low to High",
      value: "price-low-high",
    },
    {
      label: "Price High to Low",
      value: "price-high-low",
    },
  ];
  const _name = screen === "mobile" ? "sort-mobile" : "sort";

  return (
    <div className="flex flex-col items-start justify-start gap-4 p-3 border border-card bg-white">
      {sortOptions.map((option, index) => (
        <RadioInput
          key={index}
          label={option.label}
          value={option.value}
          name={_name}
          checked={filterOptions.sort === option.value ? true : false}
          id={option.value}
          onChange={() =>
            setFilterOptions({
              ...filterOptions,
              sort: option.value,
            })
          }
        />
      ))}
    </div>
  );
};

export default FilterSort;
