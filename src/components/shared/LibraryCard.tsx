import Link from "next/link";
import { Workout } from "@/Type/Type";

interface LibraryCardProps {
  workout: Workout;
}

const LibraryCard = ({ workout }: LibraryCardProps) => {
  return (
    <Link
      href={`/exercise/${workout.id}`}
      className="block w-full overflow-hidden rounded-xl border border-[#292c35] bg-[#15171d] text-white transition hover:border-[#b8ff00]/50"
    >
      {/* Image */}
      <div className="h-[190px] w-full overflow-hidden">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="mb-3 flex gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#b8ff00] px-3 py-1 text-[11px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="text-lg font-bold uppercase tracking-wide">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-sm text-gray-500">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-[#292c35]" />

        {/* Workout Stats */}
        <div className="flex items-center gap-5 text-sm text-gray-400">
          <span className="flex items-center gap-1.5">
            <span>◷</span>
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <span>🔥</span>
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <span>☆</span>
            {workout.rating}
          </span>
        </div>

      </div>
    </Link>
  );
};

export default LibraryCard;