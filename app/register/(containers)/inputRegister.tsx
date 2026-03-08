"use client";

import { SubmitEvent, SubmitEventHandler, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRegister } from "../hooks";

export default function InputRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isPending, isError, mutate } = useRegister();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      name,
      username,
      email: `${username}@mail.com`,
      phone,
      password,
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4 relative">
      {/* Gradient background */}
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-linear-to-t from-purple-600 via-purple-500/40 to-transparent blur-2xl"></div>

      {/* Card */}
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-[24px] font-bold text-white mt-8">Sociality</h1>
          <h2 className="text-[24px] font-bold text-white mt-4">Register</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-white text-[14px] font-bold mt-4">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#0c111b] border border-white/10 rounded-lg px-4 py-3 text-neutral-400 outline-none mt-2"
            />
          </div>

          {/* Username */}
          <div className="space-y-2">
            <label className="text-white text-[14px] font-bold mt-5">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#0c111b] border border-white/10 rounded-lg px-4 py-3 text-neutral-400 outline-none mt-2"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-white text-[14px] font-bold mt-5">
              Number Phone
            </label>
            <input
              type="tel"
              placeholder="Enter your number phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#0c111b] border border-white/10 rounded-lg px-4 py-3 text-neutral-400 outline-none mt-2"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-white text-[14px] font-bold mt-5">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0c111b] border border-white/10 rounded-lg px-4 py-3 text-neutral-400 outline-none mt-2 pr-10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label className="text-white text-[14px] font-bold mt-5">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Enter your confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-[#0c111b] border border-white/10 rounded-lg px-4 py-3 text-neutral-400 outline-none mt-2 pr-10"
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showConfirm ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 rounded-full font-semibold text-white bg-linear-to-r from-purple-600 to-purple-500 hover:opacity-90"
          >
            {isPending ? "Loading..." : "Submit"}
          </button>

          {/* Error */}
          {isError && (
            <p className="text-red-500 text-sm text-center">
              Terjadi kesalahan saat register
            </p>
          )}

          {/* Login link */}
          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <span className="text-purple-400 cursor-pointer">Log in</span>
          </p>
        </form>
      </div>
    </main>
  );
}
