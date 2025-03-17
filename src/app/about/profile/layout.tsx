import Link from "next/link";
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Profile Layout</h1>
      <div className="ml-60">{children}</div>
    </>
  );
}
