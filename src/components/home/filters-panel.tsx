import FiltersContainer from "./filters-container";
import SectionTitle from "./section-title";

const FiltersPanel = () => {
  return (
    <aside className="w-[220px] tablet:flex flex-col hidden sticky overflow-scroll top-[52px] sm:h-[calc(100dvh-52px)] h-[calc(100dvh-108px)] py-4">
      <SectionTitle title="Filters" />
      <FiltersContainer />
    </aside>
  );
};

export default FiltersPanel;
