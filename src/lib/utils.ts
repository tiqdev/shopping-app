import { FilterOptions } from "@/models/FilterOptions";
import { Product } from "@/models/Product";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatPrice = (price: number) => {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export const filterProducts = (
  list: Product[],
  filterOptions: FilterOptions
) => {
  let filteredList = [...list];

  // Brand Filter
  if (filterOptions.brands.length > 0) {
    filteredList = filteredList.filter((product) =>
      filterOptions.brands.includes(product.brand)
    );
  }

  // Model Filter
  if (filterOptions.models.length > 0) {
    filteredList = filteredList.filter((product) =>
      filterOptions.models.includes(product.model)
    );
  }

  // Search Filter
  if (filterOptions.search.trim() !== "") {
    filteredList = filteredList.filter((product) =>
      product.name.toLowerCase().includes(filterOptions.search.toLowerCase())
    );
  }

  // Sort Filter
  switch (filterOptions.sort) {
    case "old-new":
      filteredList = filteredList.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      break;
    case "new-old":
      filteredList = filteredList.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
    case "price-low-high":
      filteredList = filteredList.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
      break;
    case "price-high-low":
      filteredList = filteredList.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      break;
  }

  // page count
  const pageCount = Math.ceil(filteredList.length / 12);

  // Pagination
  const startIndex = (filterOptions.page - 1) * 12;
  const endIndex = startIndex + 12;
  filteredList = filteredList.slice(startIndex, endIndex);

  return { filteredList, pageCount };
};

export const filterBrands = (products: Product[]) => {
  const brands = products.map((product) => product.brand);
  return Array.from(new Set(brands));
};

export const filterModels = (products: Product[]) => {
  const models = products.map((product) => product.model);
  return Array.from(new Set(models));
};

export const filterModelsByBrand = (
  products: Product[],
  brandList: string[]
) => {
  if (brandList.length === 0) {
    return filterModels(products);
  }
  const models = products
    .filter((product) => brandList.includes(product.brand))
    .map((product) => product.model);

  return Array.from(new Set(models));
};

export const searchInFilter = (list: string[], query: string) => {
  return list.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
};
