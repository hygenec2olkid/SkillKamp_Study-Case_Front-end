import * as request from "./request";
import { APIResponse } from "./request";

const CartAPI = {
  getCartAPI: async (token: string) => {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await request.get<APIResponse>(
        "/cart",
        (headers = headers)
      );
      return response.data;
    } catch (e) {
      console.error("error getCartAPI  ", e);
      return null;
    }
  },
};

export default CartAPI;
