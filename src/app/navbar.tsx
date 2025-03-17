import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-gray-800 text-white py-2 px-4">
            <h1>Navbar</h1>
            <div className="flex items-center gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/about/profile">Profile</Link>
            </div>
        </nav>
    )
}
