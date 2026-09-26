import Image from "next/image";
import Link from "next/link";
import banner from "../../assets/banner.png";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="mx-auto mt-5 h-auto w-[calc(100%-32px)] max-w-[1232px] rounded-xl border border-[#25282d] bg-[#15171c] sm:mt-8 sm:w-[calc(100%-48px)] lg:h-[448px]">

      <div className="flex h-full flex-col items-center justify-between px-5 py-8 sm:px-8 lg:flex-row lg:px-[38px] lg:py-0">

        {/* Left */}
        <div className="w-full lg:w-[650px]">

          <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#c8ff00]">
            Workout Library
          </p>

          <h1 className="max-w-[650px] text-[38px] font-black uppercase leading-[0.95] text-white sm:text-[46px] lg:text-[56px]">
            Train with intent. Log every set.
          </h1>

          <p className="mt-5 max-w-[600px] text-[13px] leading-6 text-gray-400 sm:text-[14px]">
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
        <div className="relative mt-8 h-[250px] w-full max-w-[350px] sm:h-[300px] lg:mt-0 lg:h-[390px] lg:w-[400px]">

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