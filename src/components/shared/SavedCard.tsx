"use client"

import { WorkoutContext } from "@/Context/workoutContext";
import { Workout } from "@/Type/Type";
import React, { useContext } from "react";

const SavedCard = ({ workout }: { workout: Workout }) => {

    const { saved, setSaved } = useContext(WorkoutContext)

    const handleRemove = () => {
        const remainingWorkouts = saved.filter(
            (item) => item.id !== workout.id
        )

        setSaved(remainingWorkouts)
    }

    return (
        <div className="flex w-full items-center gap-4 rounded-xl border border-[#292c35] bg-[#15171d] p-3 text-white">

            {/* Image */}
            <div className="h-[60px] w-[108px] shrink-0 overflow-hidden rounded-lg">
                <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Workout Info */}
            <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold uppercase tracking-wide">
                    {workout.name}
                </h3>

                <p className="mt-0.5 text-[11px] text-gray-500">
                    {workout.equipment}
                </p>

                <div className="mt-2 flex items-center gap-3 text-[10px] text-gray-400">
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

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2">

                <button className="rounded-full border border-[#343840] px-4 py-2 text-[10px] text-gray-300 transition hover:bg-[#1d2027]">
                    View Details
                </button>

                <button
                    onClick={handleRemove}
                    className="ml-1 text-lg text-gray-600 transition hover:text-white"
                >
                    ×
                </button>

            </div>

        </div>
    );
};

export default SavedCard;