"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white py-2 px-4">
      <div className="flex items-center gap-4">
        <h1>Navbar</h1>
        <ul className="flex items-center gap-4">
          <Link href="/">
            <li className={`${pathname === "/" ? "text-blue-500" : ""}`}>
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className={`${pathname === "/about" ? "text-blue-500" : ""}`}>
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`${
                pathname === "/about/profile" ? "text-blue-500" : ""
              }`}
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600" onClick={() => router.push("/login")}>
          Login
        </button>
      </div>
    </nav>
  );
}
