import type { Task } from "../../interfaces/Task";

export default function TaskElement({ task }: { task: Task }) {
  const { title, description, status, priority, image } = task;

  return (
    <div className="flex flex-col flex-nowrap sm:w-full lg:w-[300px] shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer bg-white">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={`${import.meta.env.VITE_API_URL}${image}`}
          alt="img-task"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-2xl font-semibold capitalize text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {status ? "Completado" : "Pendiente"}
          </span>
          <div className="flex gap-2">
            Prioridad:
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium
            ${
              priority === "high"
                ? "bg-red-100 text-red-800"
                : priority === "medium"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-blue-100 text-blue-800"
            }`}
            >
              {priority === "high"
                ? "Alta"
                : priority === "medium"
                ? "Media"
                : "Baja"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
