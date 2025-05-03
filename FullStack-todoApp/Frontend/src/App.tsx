import "./App.css";
import { useTask } from "./Hooks/useTask";
import { Task } from "./interfaces/Task";

function App() {
  const { data, isLoading } = useTask();
  const tasks = data as Task[];

  return (
    <div className="container px-5">
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="flex gap-5">
          {tasks.map((task) => {
            return (
              <div key={task._id} className="flex flex-col">
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>{task.status}</p>
                <p>{task.priority}</p>
                <img
                  src={`${import.meta.env.VITE_API_URL}${task.image}`}
                  alt="img-task"
                  className="w-50 h-50  object-cover object-center m-2"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
