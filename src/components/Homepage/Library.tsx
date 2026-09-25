import { getAllData } from "@/lib/Library";
import LibraryCard from "../shared/LibraryCard";
import { Workout } from "@/Type/Type";

const Library = async () => {
  const data = await getAllData();

  return (
    <section
      id="library"
      className="mx-auto max-w-[1232px] px-5 py-10"
    >
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          THE LIBRARY
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((library: Workout) => (
          <LibraryCard
            key={library.id}
            workout={library}
          />
        ))}
      </div>
    </section>
  );
};

export default Library;