import Planbutton from "@/components/Button/Planbutton";
import Savedbutton from "@/components/Button/Savedbutton";
import { getAllData } from "@/lib/Library";
import { Workout } from "@/Type/Type";

interface WorkoutsDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const WorkoutsDetailPage = async ({
    params,
}: WorkoutsDetailPageProps) => {

    const { id } = await params;

    const data: Workout[] = await getAllData();

    const workout = data.find((item) => item.id === Number(id));


    if (!workout) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] px-4 text-white">

                <h1 className="text-xl font-bold sm:text-2xl">
                    Workout not found
                </h1>

            </main>
        );
    }


    return (
        <main className="min-h-screen bg-[#0b0d0f] px-4 py-8 text-white sm:px-6 sm:py-10">

            <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">


                {/* Left - Image */}
                <div className="overflow-hidden rounded-xl">

                    <img
                        src={workout.image}
                        alt={workout.name}
                        className="h-[300px] w-full object-cover sm:h-[420px] lg:h-full lg:max-h-[620px]"
                    />

                </div>


                {/* Right - Details */}
                <div className="flex flex-col">


                    {/* Title */}
                    <h1 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl lg:text-4xl">
                        {workout.name}
                    </h1>


                    {/* Description */}
                    <p className="mt-2 max-w-[650px] text-[13px] leading-6 text-gray-400 sm:text-sm">
                        {workout.description}
                    </p>


                    {/* Muscle Groups */}
                    <div className="mt-4 flex flex-wrap gap-2">

                        {
                            workout.muscleGroups.map((muscle) => (

                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#b8ff00] px-3 py-1 text-[10px] font-bold uppercase text-black sm:text-[11px]"
                                >
                                    {muscle}
                                </span>

                            ))
                        }

                    </div>


                    {/* Information */}
                    <div className="mt-4 overflow-hidden rounded-xl border border-[#292c35] bg-[#15171d]">

                        <InfoRow
                            label="EQUIPMENT"
                            value={workout.equipment}
                        />

                        <InfoRow
                            label="DIFFICULTY"
                            value={workout.difficulty}
                        />

                        <InfoRow
                            label="SETS"
                            value={String(workout.sets)}
                        />

                        <InfoRow
                            label="REPS"
                            value={workout.reps}
                        />

                        <InfoRow
                            label="DURATION"
                            value={`${workout.duration} min`}
                        />

                        <InfoRow
                            label="CALORIES"
                            value={`${workout.caloriesBurned} kcal`}
                        />

                        <InfoRow
                            label="RATING"
                            value={String(workout.rating)}
                            last
                        />

                    </div>


                    {/* Instructions */}
                    <div className="mt-6">

                        <h2 className="text-sm font-bold uppercase">
                            INSTRUCTIONS
                        </h2>

                        <ol className="mt-3 space-y-3 text-[13px] leading-5 text-gray-400 sm:text-sm">

                            {
                                workout.instructions.map((instruction, index) => (

                                    <li
                                        key={index}
                                        className="flex gap-3"
                                    >

                                        <span className="shrink-0 text-gray-500">
                                            {index + 1}.
                                        </span>

                                        <span>
                                            {instruction}
                                        </span>

                                    </li>

                                ))
                            }

                        </ol>

                    </div>


                    {/* Buttons */}
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                        <Planbutton workout={workout} />

                        <Savedbutton workout={workout} />

                    </div>

                </div>

            </div>

        </main>
    );
};


interface InfoRowProps {
    label: string;
    value: string;
    last?: boolean;
}


const InfoRow = ({
    label,
    value,
    last = false,
}: InfoRowProps) => {

    return (
        <div
            className={`flex items-center justify-between gap-4 px-4 py-3 ${
                !last ? "border-b border-[#292c35]" : ""
            }`}
        >

            <span className="shrink-0 text-[9px] font-semibold tracking-wider text-gray-500 sm:text-[10px]">
                {label}
            </span>

            <span className="text-right text-xs text-gray-300 sm:text-sm">
                {value}
            </span>

        </div>
    );
};


export default WorkoutsDetailPage;