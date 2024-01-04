import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container z-30 py-5 relative">
      <Link href="/">
        <img src={"./hilink-logo.svg"} width={74} alt={"logo"} height={24} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button title="Click Me" icons="./user.svg" type="button" varient={"btn_dark_green"} />
      </div>

      <Image src="menu.svg"  width={32} height={32} alt="menu" className="lg:hidden inline-block cursor-pointer"/>
    </nav>
  );
};

export default Navbar;
