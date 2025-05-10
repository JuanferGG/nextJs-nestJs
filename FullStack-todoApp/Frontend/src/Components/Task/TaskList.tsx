import { useTask } from "../../Hooks/useTask";
import { Task } from "../../interfaces/Task";
import TaskElement from "./TaskElement";
import TaskModal from "./TaskModal";

export default function TaskList() {
  const { data, isLoading, refetch, isError } = useTask();
  const tasks = data as Task[];

  return (
    <div className="w-full flex flex-col items-center my-10">
      {/* El botón 'Nueva Tarea' ha sido eliminado, el control ahora es el botón flotante en TaskModal */}
      {isLoading ? (
        <p className="text-center text-xl text-gray-500">Loading</p>
      ) : isError ? (
        <div className="text-center py-5">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            ¡Ops! Algo salió mal
          </h2>
          <p className="text-center text-xl text-gray-500">
            No se pudieron cargar las tareas. Por favor, intenta de nuevo más
            tarde.
          </p>
        </div>
      ) : (
        <div className="flex md:flex-row flex-wrap flex-col gap-5 container justify-center">
          {tasks.map((task) => {
            return <TaskElement task={task} key={task._id} />;
          })}
        </div>
      )}
      <TaskModal onTaskCreated={() => refetch()} />
    </div>
  );
}
