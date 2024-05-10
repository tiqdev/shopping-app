import { setFilterOptions, setModelList } from "@/stores/product/actions";
import RadioInput from "./radio-input";
import {
  useBrandList,
  useFilterOptions,
  useModelList,
  useProducts,
} from "@/stores/product/hooks";
import CheckBoxInput from "./checkbox-input";
import { filterModelsByBrand } from "@/lib/utils";

const FiltersContainer = () => {
  const products = useProducts();
  const filterOptions = useFilterOptions();
  const modelList = useModelList();
  const brandList = useBrandList();

  console.log("filterOptions", filterOptions.sort);

  return (
    <div className="flex flex-col  gap-5">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-600">Sort By</span>

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
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-600">Brand</span>
        <div className="flex flex-col items-start justify-start gap-4 p-3 border border-card bg-white">
          <input
            type="text"
            placeholder="Search Brand"
            className="w-full p-2 border border-gray-300 rounded-lg focus:none"
          />
          <div className="h-fit max-h-[120px] overflow-scroll flex flex-col gap-1">
            {brandList.map((brand) => {
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
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-600">Model</span>
        <div className="flex flex-col items-start justify-start gap-4 p-3 border border-card bg-white">
          <input
            type="text"
            placeholder="Search Model"
            className="w-full p-2 border border-gray-300 rounded-lg focus:none"
          />
          <div className="h-fit max-h-[120px] overflow-scroll flex flex-col gap-1">
            {modelList.map((model) => {
              return (
                <CheckBoxInput
                  key={model}
                  label={model}
                  value={model}
                  checked={filterOptions.models.includes(model)}
                  id={model}
                  onChange={() => {
                    if (filterOptions.models.includes(model)) {
                      setFilterOptions({
                        ...filterOptions,
                        models: filterOptions.models.filter(
                          (item) => item !== model
                        ),
                      });
                    } else {
                      setFilterOptions({
                        ...filterOptions,
                        models: [...filterOptions.models, model],
                      });
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersContainer;
