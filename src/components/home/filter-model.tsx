import { setFilterOptions } from "@/stores/product/actions";
import CheckBoxInput from "./checkbox-input";
import { useFilterOptions, useModelList } from "@/stores/product/hooks";
import { useEffect, useRef, useState } from "react";
import { searchInFilter } from "@/lib/utils";

const FilterModel = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [filteredModels, setFilteredModels] = useState<string[]>([]);
  const modelList = useModelList();
  const filterOptions = useFilterOptions();

  useEffect(() => {
    setFilteredModels(modelList);
  }, [modelList]);

  const handleChange = () => {
    const query = inputRef.current?.value || "";
    if (query !== "") {
      const _newModelList = searchInFilter(modelList, query);
      setFilteredModels(_newModelList);
    } else {
      setFilteredModels(modelList);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start gap-4 p-3 border border-card bg-white">
      <input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        placeholder="Search Model"
        className="w-full p-2 border border-gray-300 rounded-lg focus:none"
      />
      <div className="h-fit max-h-[120px] overflow-scroll flex flex-col gap-1">
        {filteredModels.map((model) => {
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
                    page: 1,
                    models: filterOptions.models.filter(
                      (item) => item !== model
                    ),
                  });
                } else {
                  setFilterOptions({
                    ...filterOptions,
                    page: 1,
                    models: [...filterOptions.models, model],
                  });
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterModel;
