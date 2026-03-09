import { api } from "@/services/api";
import { ILoginBody } from "./type";

export const doLogin = async (body: ILoginBody) => {
  try {
    const response = await api.post("/api/auth/login", body);
    if (response.status === 200) {
      localStorage.setItem("access_token", response.data.data.token);
    }
  } catch (error) {
    console.log(error);
  }
};
