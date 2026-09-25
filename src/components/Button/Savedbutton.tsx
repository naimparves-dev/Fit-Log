"use client";

import { WorkoutContext } from "@/Context/workoutContext";
import { Workout } from "@/Type/Type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const Savedbutton = ({ workout }: { workout: Workout }) => {
  const { saved, setSaved } = useContext(WorkoutContext);

  const handelSaved = () => {
    const alreadySaved = saved.some(
      (item: Workout) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.error(`${workout.name} is already saved`);
      return;
    }

    setSaved([...saved, workout]);

    toast.success(`${workout.name} is Saved for later`);
  };

  return (
    <button
      onClick={handelSaved}
      className="btn border border-[#343840] bg-transparent text-gray-300 hover:bg-[#15171d]"
    >
      ♡ Save for later
    </button>
  );
};

export default Savedbutton;