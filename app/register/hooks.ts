import { useState } from "react";
import { IRegisterBody } from "./type";
import { api } from "@/services/api";

export const useRegister = () => {
  const [data, setData] = useState<any>();
  const [isPending, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const doRegister = async (body: IRegisterBody) => {
    try {
      setIsLoading(true);

      const response = await api.post("/api/auth/register", body);

      setData(response.data);
      setIsError(false);
      setError("");

      console.log("Register Success:", response.data);
    } catch (err: any) {
      console.error("Register Error:", err);

      setIsError(true);
      setError("Terjadi kesalahan saat register");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mutate: doRegister,
    data,
    isPending,
    isError,
    error,
  };
};
