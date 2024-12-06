export type Credentials = {
  email: string;
  password: string;
};

export type BasicUser = {
  id: number;
  email?: string;
  pages: EgapC3[];
};

export type FullUser = BasicUser & {
  isProfilePrivate?: boolean;
  ban: boolean;
  valid: boolean;
  verified: boolean;
};

export type SearchType =
  | "BY_GATHERING_TYPE"
  | "BY_GATHERING_TAGS"
  | "BY_GATHERING_GROUPINGS"
  | "BY_GATHERING_PARTICIPATION"
  | "BY_GATHERING_FOLLOW";

export type ChartType = "LINE" | "BAR" | "BUBBLE" | "PIE";

export type DashboardParams = {
  startDate: Date | string;
  endDate: Date | string;
  startAddress: Address | undefined;
  arrivalAddress: Address | undefined;
  type: SearchType | undefined;
  chartType: ChartType | undefined;
};

export type Address = {
  id: number | undefined;
  address: string;
  zipcode: number | undefined;
  city: string;
  supplement: string | undefined;
  lat?: number;
  lon?: number;
};

export const emptyAddress = (): Address => {
  return {
    id: undefined,
    address: "",
    zipcode: undefined,
    city: "",
    supplement: undefined,
  };
};

export type Page<T> = {
  loaded: boolean;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: { pageNumber: number; pageSize: number };
  size: number;
  sort: string;
  totalElements: number;
  totalPages: number;
  content: T[];
};

export type EgapC3 = {
  id?: number;
  name: string;
  charts: Chart[];
};

export type Chart = {
  id?: number;
};
