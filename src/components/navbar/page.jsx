// "use client";

import Link from "next/link";
import Image from "next/image";
import headerNavLinks from "@data/headerNavLinks";
import MobileNav from "./MobileNav";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
//   const session = useSession();

  return (
    <>
    <header className="flex flex-between w-full items-center justify-between py-6 px-3">
        <Link href="/">
            <Image 
                src="/assets/images/pseudoblog.png"
                alt="pseudoBlog Logo"
                className="mr-3 h-16 w-60 bg-cover"
                width={200}
                height={50}
            />
        </Link>
        <div className="flex items-center text-base leading-5">
        <div className="hidden md:block">
        {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.url} className="p-1 font-medium text-gray-900 sm:p-4">
                {link.title}
            </Link>
        ))}
        </div>
          <button className="pr-5">
            Logout
          </button>
          <MobileNav />
      </div>
    </header>
    </>
  );
};

export default Navbar;