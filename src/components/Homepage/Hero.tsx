import Image from "next/image";
import Link from "next/link";
// import { ArrowDown } from "lucide-react";
import banner from "../../assets/banner.png";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="mx-auto mt-8 h-[448px] w-[1232px] rounded-xl border border-[#25282d] bg-[#15171c]">
      <div className="flex h-full items-center justify-between px-[38px]">

        {/* Left */}
        <div className="w-[650px]">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#c8ff00]">
            Workout Library
          </p>

          <h1 className="max-w-[650px] text-[56px] font-black uppercase leading-[0.95] text-white">
            Train with intent. Log every set.
          </h1>

          <p className="mt-5 max-w-[600px] text-[14px] leading-6 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#c8ff00] px-6 py-3 text-[11px] font-bold uppercase text-black"
          >
            Browse Workouts
            <FaArrowDown size={12} />
          </Link>
        </div>

        {/* Right */}
        <div className="relative h-[390px] w-[400px]">
          <Image
            src={banner}
            alt="Workout"
            fill
            priority
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;