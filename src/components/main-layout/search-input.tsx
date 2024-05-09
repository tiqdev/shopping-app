import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="center-row gap-2 flex-1 sm:max-w-[408px] h-10 bg-white p-2 pl-3">
      <div className="center-row w-6 h-6 p-[3px]">
        <Search className="text-gray-600" />
      </div>
      <input
        type="text"
        className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-gray-800"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
