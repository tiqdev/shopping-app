import FilterBrand from "./filter-brand";
import FilterModel from "./filter-model";
import FilterSort from "./filter-sort";

const FiltersContainer = () => {
  const filters = [
    { title: "Brand", component: FilterBrand },
    { title: "Model", component: FilterModel },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-600">Sort By</span>
        <FilterSort screen={"pc"} />
      </div>

      {filters.map((item, index) => (
        <div className="flex flex-col gap-1" key={index}>
          <span className="text-sm text-gray-600">{item.title}</span>
          <item.component key={index} />
        </div>
      ))}
    </div>
  );
};

export default FiltersContainer;
