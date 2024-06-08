'use client'; // Añade esta línea al principio del archivo

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/home";
  const isAdopt = pathname === "/adoption";
  const isFav = pathname === "/favorites";
  const isAdd = pathname === "/addpet"; 

  const homeLinkClass = classNames(
    "text-sm font-medium hover:underline underline-offset-4",
    {
      "text-white": isHome,
      "text-black": !isHome,
    }
  );

  const adoptLinkClass = classNames(
    "text-sm font-medium hover:underline underline-offset-4",
    {
      "text-black": isAdopt,
      "text-gray-600": !isAdopt,
    }
  );

  const favLinkClass = classNames(
    "text-sm font-medium hover:underline underline-offset-4",
    {
      "text-black": isFav,
      "text-gray-600": !isFav,
    }
  );

  const addLinkClass = classNames(
    "text-sm font-medium hover:underline underline-offset-4",
    {
      "text-black": isAdd,
      "text-gray-600": !isAdd,
    }
  );

  const defaultLinkClass = "text-sm font-medium hover:underline underline-offset-4 text-gray-600";

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center"> {/* Cambia el fondo si es necesario */}
      <Link className="flex items-center justify-center" href="/home">
        <PawPrintIcon className={`h-6 w-6 ${homeLinkClass}`} />
        <span className="sr-only">Pet Adoption App</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className={adoptLinkClass} href="/adoption">
          Adopt
        </Link>
        <Link className={addLinkClass} href="/addpet">
          Add pet
        </Link>
        <Link className={favLinkClass} href="/favorites">
          Favorites
        </Link>
        <Link className={defaultLinkClass} href="#">
          Contact
        </Link>
      </nav>
    </header>
  );
}

function PawPrintIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  );
}
