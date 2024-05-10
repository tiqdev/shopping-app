import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import { setIsFilterSheetOpen } from "@/stores/product/actions";
import { useIsFilterSheetOpen } from "@/stores/product/hooks";
import FiltersContainer from "./filters-container";
import { X } from "lucide-react";

const FilterSheet = () => {
  const isFilterSheetOpen = useIsFilterSheetOpen();
  console.log(isFilterSheetOpen, "isFilterSheetOpen");
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 sm:w-[60%] bg-secondary mobile:w-[75%] w-full p-4 transition-transform duration-300 z-50",
        {
          "-translate-x-full": !isFilterSheetOpen,
          "tablet:hidden block": !isMobile,
        }
      )}
    >
      <div className="flex flex-col items-stretch">
        <div className="flex flex-row justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-primary">Filters</h1>
          <button
            onClick={() => setIsFilterSheetOpen(false)}
            className="text-primary"
          >
            <X size={24} />
          </button>
        </div>

        <FiltersContainer />
      </div>
    </div>
  );
};

export default FilterSheet;
