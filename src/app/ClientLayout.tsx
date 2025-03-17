"use client";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";

const disableNavbar = ["/login", "/register"];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </>
  );
}
