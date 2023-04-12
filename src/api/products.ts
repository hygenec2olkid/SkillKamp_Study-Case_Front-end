import * as request from "./request";
import { APIResponse } from "./request";

const ProductsAPI = {
  getAllProductsAPI: async (
    category?: string,
    price?: string,
    option_color?: string,
    option_list?: string
  ) => {
    let requestURL = "/products/?";
    if (category) {
      requestURL += `CATEGORY=${category}&`;
    }
    if (price) {
      requestURL += `PRICE=${price}&`;
    }
    if (option_color) {
      requestURL += `OPTION_COLOR=${option_color}&`;
    }
    if (option_list) {
      requestURL += `OPTION_LIST=${option_list}&`;
    }
    try {
      const response = await request.get<APIResponse>(requestURL);
      // console.log(response);
      // const [data] = response.data
      return response.data;
    } catch (e) {
      console.error("error getAllProducts API ", e);
      return [];
    }
  },
  getDetailsItemAPI: async (sku: string) => {
    try {
      const response = await request.get<APIResponse>(
        `/products/details/${sku}`
      );
      // const [data] = response.data
      return response.data;
    } catch (e) {
      console.error("error getDetailsItem API ", e);
      return [];
    }
  },
  getNewArrivalsAPI: async () => {
    try {
      const response = await request.get<APIResponse>(`/products/new_arrivals`);
      // const [data] = response.data
      return response.data;
    } catch (e) {
      console.error("error getNewArrivals API ", e);
      return [];
    }
  },
};

export default ProductsAPI;
