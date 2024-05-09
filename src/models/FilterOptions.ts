export interface FilterOptions {
  sort: "old-new" | "new-old" | "price-low-high" | "price-high-low";
  brands: string[];
  models: string[];
  search: string;
  page: number;
}
