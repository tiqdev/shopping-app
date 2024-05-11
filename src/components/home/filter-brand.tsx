import { filterModelsByBrand, searchInFilter } from "@/lib/utils";
import { setFilterOptions, setModelList } from "@/stores/product/actions";
import {
  useBrandList,
  useFilterOptions,
  useProducts,
} from "@/stores/product/hooks";
import CheckBoxInput from "./checkbox-input";
import { useEffect, useRef, useState } from "react";

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
      <input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        placeholder="Search Brand"
        className="w-full p-2 border border-gray-300 rounded-lg focus:none"
      />
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
