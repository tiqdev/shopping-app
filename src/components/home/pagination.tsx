import { cn } from "@/lib/utils";
import { setFilterOptions } from "@/stores/product/actions";
import { useFilterOptions } from "@/stores/product/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ pageCount }: { pageCount: number }) => {
  const filterOptions = useFilterOptions();

  const handleClick = (page: number) => {
    const newpage = page;
    const newFilterOptions = { ...filterOptions, page: newpage };
    setFilterOptions(newFilterOptions);
  };

  return (
    <div className="w-full flex justify-center items-center gap-[10px] mt-4">
      {filterOptions.page !== 1 && (
        <button
          onClick={() => handleClick(filterOptions.page - 1)}
          className="w-[30px] h-[30px] rounded-[4px] hover:bg-primary hover:text-white flex justify-center items-center transition-colors"
        >
          <ChevronLeft size={14} />
        </button>
      )}

      {Array.from({ length: pageCount }).map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index + 1)}
          className={cn(
            "w-[30px] h-[30px] rounded-[4px] hover:bg-primary hover:text-white flex justify-center items-center transition-colors",
            filterOptions.page === index + 1
              ? "bg-white shadow-card hover:bg-white hover:text-primary"
              : ""
          )}
        >
          {index + 1}
        </button>
      ))}

      {filterOptions.page !== pageCount && (
        <button
          onClick={() => handleClick(filterOptions.page + 1)}
          className="w-[30px] h-[30px] rounded-[4px] hover:bg-primary hover:text-white flex justify-center items-center transition-colors"
        >
          <ChevronRight size={14} />
        </button>
      )}
    </div>
  );
};

export default Pagination;
