"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = ({ currentPage }) => {
  const pathname = usePathname();
  return (
    <nav className="absolute top-[2rem] md:top-[2rem] md:right-[5rem] font-body text-[#e4dabac2]">
      <ul className="flex flex-row gap-10">
        <li>
          <Link
            className={`link ${
              pathname === "/"
                ? "active" && "border-b pb-2 border-[#e4dabac2]"
                : ""
            }`}
            href="/"
          >
            Home
          </Link>
        </li>
        {/* TODO: Add in projects at a later time*/}
        {/* <li>
          <Link
            className={`link ${pathname === "/projects" ? "active" : ""}`}
            href="/projects"
          >
            Projects
          </Link>
        </li> */}
        <li>
          <Link
            className={`link ${
              pathname === "/work" ? "active" && "border-b pb-2" : ""
            }`}
            href="/work"
          >
            Work Experience
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
