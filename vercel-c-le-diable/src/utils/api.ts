import ky from "ky";
import { createTuyau } from "@tuyau/client";
import { api } from "backend-adonis/api";

export const httpClient = ky.create();

export function buildCavabiensepasserHttpRequest(url: string) {
  return `http://localhost:5173/api/v1${url}`;
}

export function buildHttpRequest(url: string) {
  return `http://127.0.0.1:5173/api${url}`;
}

export function toHttpParams<T extends { [key in string]: any }>(
  params: T,
  defaultValues?: Partial<T>,
): URLSearchParams {
  let formattedParams: URLSearchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    let enhanceValue = value ?? defaultValues?.[key];
    if (enhanceValue !== null && enhanceValue !== undefined) {
      if (Array.isArray(enhanceValue)) {
        enhanceValue = enhanceValue.filter(
          (value) => value !== null && value !== undefined,
        );
        formattedParams = enhanceValue.reduce(
          (acc: any, item: any) => acc.append(key, item),
          formattedParams,
        );
      } else {
        formattedParams.set(key, enhanceValue);
      }
    }
  });
  return formattedParams;
}

export const tuyau = createTuyau({
  api,
  credentials: "include",
  baseUrl: "http://localhost:3333",
});
