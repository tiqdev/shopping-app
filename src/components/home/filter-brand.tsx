import { filterModelsByBrand, searchInFilter } from "@/lib/utils";
import { setFilterOptions, setModelList } from "@/stores/product/actions";
import {
  useBrandList,
  useFilterOptions,
  useProducts,
} from "@/stores/product/hooks";
import CheckBoxInput from "./checkbox-input";
import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";

const FilterBrand = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const brandList = useBrandList();
  const products = useProducts();
  const filterOptions = useFilterOptions();
  const [filteredBrands, setFilteredBrands] = useState<string[]>([]);

  const handleChange = () => {
    const query = inputRef.current?.value || "";
    if (query !== "") {
      const _newBrandList = searchInFilter(brandList, query);
      setFilteredBrands(_newBrandList);
    } else {
      setFilteredBrands(brandList);
    }
  };

  useEffect(() => {
    setFilteredBrands(brandList);
  }, [brandList]);

  return (
    <div className="flex flex-col items-start justify-start gap-4 p-3 border border-card bg-white">
      <div className="center-row w-full rounded-lg p-2 gap-2 bg-soft">
        <Search className="text-gray-400" size={16} />
        <input
          type="text"
          ref={inputRef}
          onChange={handleChange}
          placeholder="Search Brand"
          className="w-full  bg-transparent focus:none outline-none"
        />
      </div>
      <div className="h-fit max-h-[120px] overflow-scroll flex flex-col gap-1">
        {filteredBrands.map((brand) => {
          return (
            <CheckBoxInput
              key={brand}
              label={brand}
              value={brand}
              checked={filterOptions.brands.includes(brand)}
              id={brand}
              onChange={() => {
                let models;
                if (filterOptions.brands.includes(brand)) {
                  // remove brand from the list
                  setFilterOptions({
                    ...filterOptions,
                    page: 1,
                    brands: filterOptions.brands.filter(
                      (item) => item !== brand
                    ),
                  });

                  // get models of the remaining brands
                  models = filterModelsByBrand(
                    products,
                    filterOptions.brands.filter((item) => item !== brand)
                  );
                } else {
                  // add brand to the list
                  setFilterOptions({
                    ...filterOptions,
                    page: 1,
                    brands: [...filterOptions.brands, brand],
                  });

                  // get models of the selected brands
                  models = filterModelsByBrand(products, [
                    ...filterOptions.brands,
                    brand,
                  ]);
                }
                setModelList(models);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterBrand;
