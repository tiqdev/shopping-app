import FiltersContainer from "./filters-container";
import SectionTitle from "./section-title";

const FiltersPanel = () => {
  return (
    <div className="w-[220px] tablet:flex flex-col hidden sticky overflow-scroll top-[52px] sm:h-[calc(100dvh-52px)] h-[calc(100dvh-108px)] py-4 pl-1">
      <SectionTitle title="Filters" />
      <FiltersContainer />
    </div>
  );
};

export default FiltersPanel;
