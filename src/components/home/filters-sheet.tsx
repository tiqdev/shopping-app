import useIsMobile from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";
import { setIsFilterSheetOpen } from "@/stores/product/actions";
import { useIsFilterSheetOpen } from "@/stores/product/hooks";
import { X } from "lucide-react";
import FilterBrand from "./filter-brand";
import FilterModel from "./filter-model";
import FilterSort from "./filter-sort";

const FilterSheet = () => {
  const isFilterSheetOpen = useIsFilterSheetOpen();
  const isMobile = useIsMobile();

  const filters = [
    { title: "Brand", component: FilterBrand },
    { title: "Model", component: FilterModel },
  ];

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 sm:w-[60%] bg-secondary mobile:w-[75%] w-full p-4 transition-transform duration-300 z-50 overflow-scroll",
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
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-600">Sort By</span>
            <FilterSort screen={"mobile"} />
          </div>

          {filters.map((item, index) => (
            <div className="flex flex-col gap-1" key={index}>
              <span className="text-sm text-gray-600">{item.title}</span>
              <item.component key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSheet;
