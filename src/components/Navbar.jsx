// components/NavBar.jsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();
  const isPortfolioPage = pathname.startsWith("/portfolio");

  return (
    <nav className="bg-lightg fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4">
      {isPortfolioPage && (
        <Link href="/" className="text-darkg font-mansalva text-2xl hover:bg-lightg transition">
          home
        </Link>
      )}

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="text-2xl font-mansalva text-darkg">
          hannah larsen
        </Link>
      </div>
    </nav>
  );
}
