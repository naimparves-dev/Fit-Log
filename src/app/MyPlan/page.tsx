"use client"

import MyPlanCard from '@/components/shared/MyPlanCard';
import SavedCard from '@/components/shared/SavedCard';
import { WorkoutContext } from '@/Context/workoutContext';
import { Workout } from '@/Type/Type';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const MyPlanPage = () => {

    const { todaysPlan, saved } = useContext(WorkoutContext)

    const [activeTab, setActiveTab] = useState("plan")
    const [sortBy, setSortBy] = useState("duration")

    const activeData = activeTab === "plan" ? todaysPlan : saved


    const sortedData = [...activeData].sort((a, b) => {

        if (sortBy === "duration") {
            return a.duration - b.duration
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned
        }

        if (sortBy === "rating") {
            return b.rating - a.rating
        }

        return 0
    })


    const totalExercises = activeData.length

    const totalMinutes = activeData.reduce((total, workout) => {
        return total + workout.duration
    }, 0)

    const totalCalories = activeData.reduce((total, workout) => {
        return total + workout.caloriesBurned
    }, 0)


    return (
        <section className="mx-auto w-full max-w-[1040px] px-4 pt-8 pb-12 sm:px-6 sm:pt-[38px] lg:px-0 lg:pb-[60px]">

            {/* Heading */}
            <div>

                <h2 className="text-[24px] leading-[30px] font-bold uppercase text-white sm:text-[28px] sm:leading-[34px]">
                    MY PLAN
                </h2>

                <p className="mt-[4px] text-[12px] leading-[18px] text-[#858b96] sm:text-[13px]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

            </div>


            {/* Statistics */}
            <div className="mt-5 grid h-[95px] grid-cols-3 overflow-hidden rounded-[12px] border border-[#252a32] bg-[#13161c] sm:mt-[23px] sm:h-[108px] sm:rounded-[14px]">

                {/* Exercises */}
                <div className="flex flex-col justify-center border-r border-[#252a32] px-3 sm:px-[21px]">

                    <p className="text-[9px] leading-[14px] text-[#858b96] sm:text-[10px]">
                        Exercises
                    </p>

                    <h3 className="mt-[3px] text-[25px] leading-[30px] font-bold text-[#b8ff00] sm:text-[32px] sm:leading-[36px]">
                        {totalExercises}
                    </h3>

                </div>


                {/* Minutes */}
                <div className="flex flex-col justify-center border-r border-[#252a32] px-3 sm:px-[21px]">

                    <p className="text-[9px] leading-[14px] text-[#858b96] sm:text-[10px]">
                        Minutes
                    </p>

                    <h3 className="mt-[3px] text-[25px] leading-[30px] font-bold text-white sm:text-[32px] sm:leading-[36px]">
                        {totalMinutes}
                    </h3>

                </div>


                {/* Calories */}
                <div className="flex flex-col justify-center px-3 sm:px-[21px]">

                    <p className="text-[9px] leading-[14px] text-[#858b96] sm:text-[10px]">
                        Calories
                    </p>

                    <h3 className="mt-[3px] text-[25px] leading-[30px] font-bold text-white sm:text-[32px] sm:leading-[36px]">
                        {totalCalories}
                    </h3>

                </div>

            </div>


            {/* Tabs + Sort */}
            <div className="mt-6 flex min-h-[36px] flex-col gap-3 sm:mt-[28px] sm:flex-row sm:items-center sm:justify-between sm:gap-0">

                {/* Tabs */}
                <div className="flex h-[36px] w-fit items-center rounded-[9px] border border-[#252a32] bg-[#15181e] p-[3px]">

                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`h-[28px] rounded-[6px] px-4 text-[10px] transition sm:px-[17px] ${
                            activeTab === "plan"
                                ? "bg-[#242933] font-semibold text-white"
                                : "text-[#858b96]"
                        }`}
                    >
                        Todays Plan
                    </button>


                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`h-[28px] rounded-[6px] px-4 text-[10px] transition sm:px-[17px] ${
                            activeTab === "saved"
                                ? "bg-[#242933] font-semibold text-white"
                                : "text-[#858b96]"
                        }`}
                    >
                        Saved
                    </button>

                </div>


                {/* Sort */}
                <div className="flex items-center justify-between gap-2 sm:justify-end sm:gap-[8px]">

                    <span className="text-[10px] text-[#858b96]">
                        Sort By
                    </span>


                    <div className="relative">

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="h-[34px] w-[100px] appearance-none rounded-[8px] border border-[#292d35] bg-[#15181e] px-[10px] pr-[25px] text-[10px] text-[#d0d3d8] outline-none sm:w-[90px]"
                        >

                            <option value="duration">
                                Duration
                            </option>

                            <option value="calories">
                                Calories
                            </option>

                            <option value="rating">
                                Rating
                            </option>

                        </select>


                        <FiChevronDown
                            size={13}
                            className="pointer-events-none absolute right-[8px] top-1/2 -translate-y-1/2 text-[#858b96]"
                        />

                    </div>

                </div>

            </div>


            {/* Workout Content */}
            <div className="mt-5 sm:mt-[20px]">

                {
                    activeTab === "plan" && (

                        todaysPlan.length > 0 ? (

                            <div className="space-y-3 sm:space-y-[14px]">

                                {
                                    sortedData.map((data: Workout) => {

                                        return (
                                            <MyPlanCard
                                                key={data.id}
                                                workout={data}
                                            />
                                        )

                                    })
                                }

                            </div>

                        ) : (

                            <div className="flex min-h-[240px] flex-col items-center justify-center rounded-[12px] border border-dashed border-[#292d35] px-5 text-center sm:h-[262px]">

                                <h3 className="text-[15px] font-bold uppercase text-white sm:text-[16px]">
                                    NOTHING HERE YET
                                </h3>

                                <p className="mt-[4px] text-[11px] text-[#858b96]">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link
                                    href="/#library"
                                    className="mt-5 flex h-[34px] items-center rounded-full bg-[#b8ff00] px-[22px] text-[10px] font-semibold text-black"
                                >
                                    Go to workouts
                                </Link>

                            </div>

                        )

                    )
                }


                {
                    activeTab === "saved" && (

                        saved.length > 0 ? (

                            <div className="space-y-3 sm:space-y-[14px]">

                                {
                                    sortedData.map((data: Workout) => {

                                        return (
                                            <SavedCard
                                                key={data.id}
                                                workout={data}
                                            />
                                        )

                                    })
                                }

                            </div>

                        ) : (

                            <div className="flex min-h-[240px] flex-col items-center justify-center rounded-[12px] border border-dashed border-[#292d35] px-5 text-center sm:h-[262px]">

                                <h3 className="text-[15px] font-bold uppercase text-white sm:text-[16px]">
                                    NOTHING HERE YET
                                </h3>

                                <p className="mt-[4px] text-[11px] text-[#858b96]">
                                    Browse the library and save a lift to see it here.
                                </p>

                                <Link
                                    href="/#library"
                                    className="mt-5 flex h-[34px] items-center rounded-full bg-[#b8ff00] px-[22px] text-[10px] font-semibold text-black"
                                >
                                    Go to workouts
                                </Link>

                            </div>

                        )

                    )
                }

            </div>

        </section>
    );
};

export default MyPlanPage;