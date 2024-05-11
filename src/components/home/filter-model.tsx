import { setFilterOptions } from "@/stores/product/actions";
import CheckBoxInput from "./checkbox-input";
import { useFilterOptions, useModelList } from "@/stores/product/hooks";
import { useEffect, useRef, useState } from "react";
import { searchInFilter } from "@/lib/utils";
import { Search } from "lucide-react";

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
      <div className="center-row w-full rounded-lg p-2 gap-2 bg-soft">
        <Search className="text-gray-400" size={16} />
        <input
          type="text"
          ref={inputRef}
          onChange={handleChange}
          placeholder="Search Model"
          className="w-full  bg-transparent focus:none outline-none"
        />
      </div>
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
