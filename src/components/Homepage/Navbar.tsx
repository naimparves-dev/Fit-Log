"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b border-[#25282d] bg-[#0b0d0f]">
      <div className="mx-auto flex h-[80px] max-w-[1280px] items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog"
            className="h-5 w-5 object-contain"
          />

          <span className="text-xs font-bold tracking-wide text-white">
            FITLOG
          </span>
        </div>


        {/* Navigation */}
        <div className="flex items-center gap-8">

          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm ${pathname === "/"
                ? "bg-[#17200d] text-[#c8ff00]"
                : "text-gray-400 hover:text-white"
              }`}
          >
            Workouts
          </Link>

          <Link
            href="/MyPlan"
            className={`rounded-full px-5 py-2 text-sm ${pathname === "/MyPlan"
                ? "bg-[#17200d] text-[#c8ff00]"
                : "text-gray-400 hover:text-white"
              }`}
          >
            My Plan
          </Link>

        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Plan</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c8ff00] text-[11px] font-bold text-black">
              0
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Saved</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 text-[10px]">
              0
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;