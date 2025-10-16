import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-gray-600 border-b p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline underline-offset-8">
              Home
            </Link>
          </li>
          <li>
            <Link href="/users" className="hover:underline underline-offset-8">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
