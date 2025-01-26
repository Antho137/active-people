"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-indigo-900 fixed top-0 left-0 right-0 z-20 p-4 md:px-10 xl:px-20 mb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/active-people/logo.png"
            alt="Active people logo"
            className="rounded"
            width={42}
            height={26}
          />
          <h1 className="text-red-500 text-3xl pb-1">
            Active<span className="text-blue-400 text-2xl">People</span>
          </h1>
        </div>
        <div className="md:hidden">
          <button className="text-white pt-1" onClick={handleMenu}>
            {!isMenuOpen ? (
              <FaBars className="fas fa-bars text-white text-xl" />
            ) : (
              <FaTimes className="fas fa-times text-white text-xl" />
            )}
          </button>
        </div>
        <ul className="text-[14px] hidden md:flex space-x-4">
          <li>
            <Link
              href="/"
              className={
                pathname === "/" ? "text-blue-400 font-bold" : "text-white"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                pathname === "/about" ? "text-blue-400 font-bold" : "text-white"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? "text-blue-400 font-bold"
                  : "text-white"
              }
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className={
                pathname === "/register"
                  ? "text-blue-400 font-bold"
                  : "text-white"
              }
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className={
                pathname === "/login" ? "text-blue-400 font-bold" : "text-white"
              }
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
      {isMenuOpen ? (
        <ul className="flex-col md:hidden bg-blue-600 mt-3 py-2 text-center">
          <li className="py-2">
            <Link
              href="/"
              className={
                pathname === "/" ? "text-blue-400 font-bold" : "text-white"
              }
            >
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="/about"
              className={
                pathname === "/about" ? "text-blue-400 font-bold" : "text-white"
              }
            >
              About
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? "text-blue-400 font-bold"
                  : "text-white"
              }
            >
              Contact
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="/register"
              className={
                pathname === "/register"
                  ? "text-blue-400 font-bold"
                  : "text-white"
              }
            >
              Register
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="/login"
              className={
                pathname === "/login" ? "text-blue-400 font-bold" : "text-white"
              }
            >
              Login
            </Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}

export default Header;
