import Link from "next/link"
export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <nav className="fixed top-100 left-0 z-10 h-screen w-60 bg-gray-800 text-white">
          <ul className=" gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <div className="ml-60">
            {children}
        </div>
      </>
    );
}
