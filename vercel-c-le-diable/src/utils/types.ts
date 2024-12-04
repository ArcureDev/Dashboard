export type Credentials = {
  email: string;
  password: string;
};

export type BasicUser = {
  id: number;
  email?: string;
};

export type FullUser = BasicUser & {
  isProfilePrivate?: boolean;
  ban: boolean;
  valid: boolean;
  verified: boolean;
};

export type DashboardParams = {
  startDate: Date | string;
  endDate: Date | string;
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
