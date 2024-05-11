import { useFilterOptions } from "@/stores/product/hooks";
import RadioInput from "./radio-input";
import { setFilterOptions } from "@/stores/product/actions";

const FilterSort = () => {
  const filterOptions = useFilterOptions();

  return (
    <div className="flex flex-col items-start justify-start gap-4 p-3 border border-card bg-white">
      <RadioInput
        label="Old to New"
        value="old-new"
        id="old-new"
        name="sort"
        onChange={() => {
          console.log("old-to-new");
          if (filterOptions.sort === "old-new") {
            return;
          }
          setFilterOptions({
            ...filterOptions,
            sort: "old-new",
          });
        }}
        checked={filterOptions.sort === "old-new"}
      />

      <RadioInput
        label="New-to-Old"
        value="new-old"
        name="sort"
        id="new-to-old"
        onChange={() => {
          if (filterOptions.sort === "new-old") {
            return;
          }
          console.log("new-to-old");
          setFilterOptions({
            ...filterOptions,
            sort: "new-old",
          });
        }}
        checked={filterOptions.sort === "new-old"}
      />

      <RadioInput
        label="Price Low to High"
        value="price-low-high"
        id="price-low-high"
        name="sort"
        onChange={() => {
          if (filterOptions.sort === "price-low-high") {
            return;
          }
          console.log("price-low-to-high");
          setFilterOptions({
            ...filterOptions,
            sort: "price-low-high",
          });
        }}
        checked={filterOptions.sort === "price-low-high"}
      />

      <RadioInput
        label="Price High to Low"
        value="price-high-low"
        id="price-high-low"
        name="sort"
        onChange={() => {
          if (filterOptions.sort === "price-high-low") {
            return;
          }
          console.log("price-high-to-low");
          setFilterOptions({
            ...filterOptions,
            sort: "price-high-low",
          });
        }}
        checked={filterOptions.sort === "price-high-low"}
      />
    </div>
  );
};

export default FilterSort;
