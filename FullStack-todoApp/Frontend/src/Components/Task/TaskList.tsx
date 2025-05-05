import { useTask } from "../../Hooks/useTask";
import { Task } from "../../interfaces/Task";
import TaskElement from "./Task";

export default function TaskList() {
  const { data, isLoading } = useTask();
  const tasks = data as Task[];

  return (
    <div className="w-full flex justify-center mt-10">
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="flex md:flex-row flex-col gap-5 container justify-center">
          {tasks.map((task) => {
            return (
              <TaskElement task={task} key={task._id} />
            );
          })}
        </div>
      )}
    </div>
  );
}
