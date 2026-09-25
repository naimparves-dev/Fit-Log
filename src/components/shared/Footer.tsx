import Image from "next/image";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-[60px] border-t border-dashed border-[#25282d] bg-[#0b0d0f]">
      <div className="mx-auto flex h-[101px] max-w-[1280px] items-center justify-between px-6">
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

        {/* Copyright */}
        <p className="text-[10px] text-gray-600">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;