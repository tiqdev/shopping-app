import { cn } from "@/lib/utils";
import { setFilterOptions } from "@/stores/product/actions";
import { useFilterOptions } from "@/stores/product/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationButton = ({
  page,
  onClick,
  isActive,
}: {
  page: number;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      role="button"
      className={cn(
        "w-[30px] h-[30px] rounded-[4px] hover:bg-primary hover:text-white flex justify-center items-center transition-colors",
        isActive ? "bg-white shadow-card hover:bg-white hover:text-primary" : ""
      )}
    >
      {page}
    </button>
  );
};

const ArrowButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      role="button"
      className="w-[30px] h-[30px] rounded-[4px] hover:bg-primary hover:text-white flex justify-center items-center transition-colors"
    >
      {children}
    </button>
  );
};

const Pagination = ({ pageCount }: { pageCount: number }) => {
  const filterOptions = useFilterOptions();

  const handleClick = (page: number) => {
    const newFilterOptions = { ...filterOptions, page: page };
    setFilterOptions(newFilterOptions);
  };

  return (
    <div className="w-full flex justify-center items-center gap-[10px] mt-4">
      {filterOptions.page !== 1 && (
        <ArrowButton onClick={() => handleClick(filterOptions.page - 1)}>
          <ChevronLeft size={14} />
        </ArrowButton>
      )}

      {Array.from({ length: pageCount }).map((_, index) => (
        <PaginationButton
          key={index}
          page={index + 1}
          onClick={() => handleClick(index + 1)}
          isActive={filterOptions.page === index + 1}
        />
      ))}

      {filterOptions.page !== pageCount && (
        <ArrowButton onClick={() => handleClick(filterOptions.page + 1)}>
          <ChevronRight size={14} />
        </ArrowButton>
      )}
    </div>
  );
};

export default Pagination;
