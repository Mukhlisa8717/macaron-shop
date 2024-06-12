import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (quary) => ({
        url: `/products${quary.path}`,
        params: quary.params,
      }),
      providesTags: ["Product"],
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
    }),
    getProductDetail: build.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Product", id }],
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailQuery } = productApi;
