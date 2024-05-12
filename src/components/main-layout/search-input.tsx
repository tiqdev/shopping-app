import { useFilterOptions, useIsSearchLoading } from "@/stores/product/hooks";
import { Loader2, Search, X } from "lucide-react";
import { debounce } from "lodash";
import { setFilterOptions, setIsSearchLoading } from "@/stores/product/actions";
import { useRef } from "react";

const SearchInput = () => {
  const isSearchLoading = useIsSearchLoading();
  const filterOptions = useFilterOptions();
  const searchQuery = filterOptions.search;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    const query = inputRef.current?.value || "";

    if (query !== "" && query.length > 2) {
      setIsSearchLoading(true);
      debounce(() => {
        setFilterOptions({
          ...filterOptions,
          page: 1,
          search: query,
        });
        setIsSearchLoading(false);
      }, 500)();
    } else if (query === "") {
      debounce(() => {
        setFilterOptions({
          ...filterOptions,
          page: 1,
          search: query,
        });
      }, 500)();
      setIsSearchLoading(false);
    }
  };

  const handleClear = () => {
    // Clear the search query
    setFilterOptions({
      ...filterOptions,
      page: 1,
      search: "",
    });

    // Clear the input field
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="center-row gap-2 flex-1 sm:max-w-[408px] h-10 bg-white p-2 pl-3">
      <div className="center-row w-6 h-6 p-[3px]">
        {isSearchLoading ? (
          <Loader2 className="animate-spin text-gray-600" />
        ) : (
          <Search className="text-gray-600" />
        )}
      </div>
      <input
        ref={inputRef}
        type="text"
        onChange={handleChange}
        className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-gray-800"
        placeholder="Search"
      />
      {!isSearchLoading && searchQuery !== "" && (
        <X
          data-testid="clear-search"
          onClick={handleClear}
          className="text-gray-600 cursor-pointer"
        />
      )}
    </div>
  );
};

export default SearchInput;
