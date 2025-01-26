"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  let theYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <div className="relative flex flex-col justify-center items-center bg-slate-700 py-6 mt-3">
      <div className="bg-white w-2/3 sm:w-1/3 lg:w-1/4 flex items-center justify-center gap-1 py-2 mb-3 rounded-[50%]">
        <Image
          src="/active-people/logo.png"
          alt="Active people logo"
          className=""
          width={38}
          height={22}
        />
        <h5 className="text-red-500 text-xl">
          Active<span className="text-blue-400 text-lg">People</span>
        </h5>
      </div>
      <div className="">
        <ul className="text-[14px] flex justify-between items-center space-x-4 my-1">
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
      <div className="flex flex-col items-center">
        <p className="flex justify-between items-center space-x-6 my-2">
          <a href="">
            <FaLinkedinIn className="text-white" size={25} />
          </a>
          <a href="">
            <FaTwitter className="text-white" size={25} />
          </a>
          <a href="">
            <FaFacebook className="text-white" size={25} />
          </a>
        </p>
        <p className="text-white">
          &copy; <span>{theYear}</span>&#160; All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
