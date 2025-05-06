import { useTask } from "../../Hooks/useTask";
import { Task } from "../../interfaces/Task";
import TaskElement from "./TaskElement";
import TaskModal from "./TaskModal";

export default function TaskList() {
  const { data, isLoading, refetch } = useTask();
  const tasks = data as Task[];

  return (
    <div className="w-full flex flex-col items-center mt-10">
      {/* El botón 'Nueva Tarea' ha sido eliminado, el control ahora es el botón flotante en TaskModal */}
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="flex md:flex-row flex-wrap flex-col gap-5 container justify-center">
          {tasks.map((task) => {
            return (
              <TaskElement task={task} key={task._id} />
            );
          })}
        </div>
      )}
      <TaskModal
        onTaskCreated={() => refetch()}
      />
    </div>
  );
}
