"use client";

import { SubmitEvent, useState } from "react";
import { doLogin } from "../api";

export default function InputLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    doLogin({
      email: email,
      password: password,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start">
        <input
          placeholder="email"
          type="email"
          onChange={(e) => handleEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => handlePassword(e.target.value)}
        />
        <input type="submit" />
        {/* <p className="text-red-500">{isError ? "Terjadi Kesalahan" : ""}</p> */}
      </form>
    </div>
  );
}
