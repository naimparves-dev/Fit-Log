'use client'

import { Workout } from '@/Type/Type';
import React, { createContext, ReactNode, useState } from 'react';


export const WorkoutContext=createContext({})

const WorkoutContextProvider = ({children}:{children:ReactNode}) => {
    const [todaysPlan,setTodaysPlan]=useState<Workout[]>([])
    const [saved,setSaved]=useState<Workout[]>([])
    const sharedData={
        todaysPlan,
        setTodaysPlan,
        saved,
        setSaved
    }
    return (
        <WorkoutContext.Provider value={sharedData}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutContextProvider;