import { Button } from "../button";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>

      <Button
        title="Sign in"
        type="button"
        className="text-primary-blue rounded-full bg-white min-w-[130px]"
      />
    </nav>
  </header>
);
