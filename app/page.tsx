import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white flex flex-col gap-4">
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/profile"}>Profile</Link>
    </div>
  );
}
