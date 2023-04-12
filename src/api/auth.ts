import * as request from "./request";
import { APIResponse } from "./request";

const AuthAPI = {
  signIn: async (email: string, password: string) => {
    try {
      const response = await request.post<APIResponse>("/auth/login", {
        email,
        password,
      });
      console.log("sign in ok!");
      return response.data;
    } catch (error) {
      console.error("Error in signIn API: ", error);
      return null;
    }
  },
  signUp: async (fullname: string, email: string, password: string) => {
    try {
      const response = await request.post<APIResponse>("/auth/signup", {
        fullname,
        email,
        password,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error in signUp API: ", error);
      return null;
    }
  },
};
export default AuthAPI;
