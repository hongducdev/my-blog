import React from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full fixed top-0 backdrop-blur-sm border-b border-neutral-300">
      <div className="max-w-[1240px] w-full mx-auto py-3 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-5">
          <Link
            href="https://hongduccodedao.io.vn"
            className="text-neutral-500 dark:text-neutral-300 font-medium hover:text-green-1000 transition-all duration-300 ease-in-out"
          >
            My Portfolio
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
