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
            <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] text-white">
                <h1 className="text-2xl font-bold">Workout not found</h1>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#0b0d0f] px-5 py-10 text-white">
            <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-2">

                {/* Left - Image */}
                <div className="overflow-hidden rounded-xl">
                    <img
                        src={workout.image}
                        alt={workout.name}
                        className="h-full max-h-[620px] w-full object-cover"
                    />
                </div>

                {/* Right - Details */}
                <div className="flex flex-col">

                    {/* Title */}
                    <h1 className="text-3xl font-bold uppercase tracking-tight">
                        {workout.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-2 max-w-[650px] text-sm leading-6 text-gray-400">
                        {workout.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-4 flex gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#b8ff00] px-3 py-1 text-[11px] font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Information */}
                    <div className="mt-4 overflow-hidden rounded-xl border border-[#292c35] bg-[#15171d]">

                        <InfoRow label="EQUIPMENT" value={workout.equipment} />

                        <InfoRow label="DIFFICULTY" value={workout.difficulty} />

                        <InfoRow label="SETS" value={String(workout.sets)} />

                        <InfoRow label="REPS" value={workout.reps} />

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

                        <ol className="mt-3 space-y-3 text-sm leading-5 text-gray-400">
                            {workout.instructions.map((instruction, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="text-gray-500">
                                        {index + 1}.
                                    </span>

                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Buttons */}
                    <div className="mt-7 flex gap-3">
                        <Planbutton workout={workout}></Planbutton>
                        <Savedbutton workout={workout}></Savedbutton>
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

const InfoRow = ({ label, value, last = false }: InfoRowProps) => {
    return (
        <div
            className={`flex items-center justify-between px-4 py-3 ${!last ? "border-b border-[#292c35]" : ""
                }`}
        >
            <span className="text-[10px] font-semibold tracking-wider text-gray-500">
                {label}
            </span>

            <span className="text-sm text-gray-300">
                {value}
            </span>
        </div>
    );
};

export default WorkoutsDetailPage;