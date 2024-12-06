import { tuyau } from "@/utils/api.ts";

type Query = {
  queryKey: string[];
  queryFn: () => {};
  staleTime: number;
};

export const getPage = (pageId: number): Query => {
  return {
    queryKey: ["pages", pageId.toString()],
    queryFn: async () => {
      return tuyau.pages({ pageId }).$get();
    },
    staleTime: 5000,
  };
};
