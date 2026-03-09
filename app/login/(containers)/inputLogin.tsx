"use client";

import { FormEvent, useState } from "react";
import { doLogin } from "../api";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function InputLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    doLogin({
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-black/90 p-8 shadow-xl mt-50 mb-[202.15px]">
        {/* Logo + Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3"></div>

          <h1 className="text-[24px] font-bold text-white mt-8">Sociality</h1>
          <p className="text-[20px] font-bold text-white mt-4">Welcome Back!</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <label className="text-[14px] font-bold text-white mt-4">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg bg-[#0b0f19] border border-gray-800 px-4 py-3 text-white placeholder:text-neutral-600 text-[16px] font-normal focus:outline-none focus:ring-2 focus:ring-purple-600 mt-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-[14px] font-bold text-white mt-5">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-lg bg-[#0b0f19] border border-gray-800 px-4 py-3 text-white placeholder:text-neutral-600 text-[16px] font-normal focus:outline-none focus:ring-2 focus:ring-purple-600 mt-2 pr-10"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 h-5 w-5 text-gray-500 cursor-pointer"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-full py-3 font-medium text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-[14px] font-semibold text-white mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-purple-500 font-bold cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
