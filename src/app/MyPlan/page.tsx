"use client"
import MyPlanCard from '@/components/shared/MyPlanCard';
import { WorkoutContext } from '@/Context/workoutContext';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const { todaysPlan, setTodaysPlan,saved, setSaved } = useContext(WorkoutContext)
    return (
        <div>
            <div>
                <h2>MY PLAN</h2>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div>
                
            </div>
            <div>
                <div className="tabs tabs-box">
                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's Plan" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            todaysPlan.map((data)=>{
                                return <MyPlanCard key={data.id} workout={data}></MyPlanCard>
                            })
                        }
                    </div>

                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        {
                            saved.map((data)=>{
                                return <MyPlanCard key={data.id} workout={data}></MyPlanCard>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPlanPage;