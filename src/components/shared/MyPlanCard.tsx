"use client"

import Link from "next/link";
import { Workout } from "@/Type/Type";
import { useContext } from "react";
import { WorkoutContext } from "@/Context/workoutContext";

const MyPlanCard = ({ workout }: { workout: Workout }) => {

    const { todaysPlan, setTodaysPlan } = useContext(WorkoutContext)

    const handleRemove = () => {

        const remainingWorkouts = todaysPlan.filter(
            (item) => item.id !== workout.id
        )

        setTodaysPlan(remainingWorkouts)
    }

    return (
        <div className="flex w-full flex-col gap-3 rounded-xl border border-[#292c35] bg-[#15171d] p-3 text-white sm:flex-row sm:items-center sm:gap-4">

            {/* Top / Image + Workout Info */}
            <div className="flex min-w-0 flex-1 items-center gap-3">

                {/* Image */}
                <div className="h-[60px] w-[90px] shrink-0 overflow-hidden rounded-lg sm:h-[60px] sm:w-[108px]">
                    <img
                        src={workout.image}
                        alt={workout.name}
                        className="h-full w-full object-cover"
                    />
                </div>


                {/* Workout Info */}
                <div className="min-w-0 flex-1">

                    <h3 className="truncate text-sm font-bold uppercase tracking-wide">
                        {workout.name}
                    </h3>

                    <p className="mt-0.5 truncate text-[11px] text-gray-500">
                        {workout.equipment}
                    </p>


                    {/* Stats */}
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-gray-400">

                        <span className="flex items-center gap-1">
                            <span className="text-[#b8ff00]">◷</span>
                            {workout.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                            <span className="text-[#b8ff00]">●</span>
                            {workout.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1">
                            <span className="text-[#b8ff00]">☆</span>
                            {workout.rating}
                        </span>

                    </div>

                </div>

            </div>


            {/* Actions */}
            <div className="flex w-full items-center gap-2 sm:w-auto">

                <Link
                    href={`/exercise/${workout.id}`}
                    className="flex-1 rounded-full border border-[#343840] px-3 py-2 text-center text-[10px] text-gray-300 transition hover:bg-[#1d2027] sm:flex-none sm:px-4"
                >
                    View Details
                </Link>


                <button
                    onClick={handleRemove}
                    className="rounded-full bg-[#b8ff00] px-4 py-2 text-[10px] font-semibold text-black transition hover:bg-[#c8ff00]"
                >
                    ✓ Mark as Done
                </button>


                <button
                    onClick={handleRemove}
                    className="ml-1 shrink-0 text-lg text-gray-600 transition hover:text-white"
                >
                    ×
                </button>

            </div>

        </div>
    );
};

export default MyPlanCard;