"use client";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between h-[60px] px-8">
      <Link href="/" title="Bruno Pinela" className="text-[24px] font-bold">
        Bruno Pinela
      </Link>
      <ul className="flex items-end">
        <li>
          <Link
            href="/about"
            title="About"
            className="px-4 text-base hover:text-highlight cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="pl-4">
          {theme === "light" ? (
            <Moon
              size={24}
              onClick={toggleTheme}
              className="cursor-pointer fill-current"
            />
          ) : (
            <Sun
              size={24}
              onClick={toggleTheme}
              className="cursor-pointer fill-current"
            />
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
