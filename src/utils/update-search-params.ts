import { UpadateSearchParams } from "./types";

export const updateSearch = (props: UpadateSearchParams) => {
  const { type, value } = props;

  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
