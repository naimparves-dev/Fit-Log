"use client"

import { WorkoutContext } from '@/Context/workoutContext';
import { Workout } from '@/Type/Type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const Planbutton = ({ workout }: { workout: Workout }) => {
    const { todaysPlan, setTodaysPlan } = useContext(WorkoutContext)

    const handelAddToPlan = () => {
        const alreadyAdded = todaysPlan.some(
            (item: Workout) => item.id === workout.id
        );

        if (alreadyAdded) {
            toast.error(`${workout.name} is already in your plan`);
            return;
        }

        setTodaysPlan([...todaysPlan, workout]);

        toast.success(`${workout.name} is added to the plan`);
    }
    return (
        <button onClick={() => handelAddToPlan()} className="btn border-0 bg-[#b8ff00] text-black hover:bg-[#c8ff00]">
            Add to plan
        </button>
    );
};

export default Planbutton;