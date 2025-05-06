import "./App.css";
import 'notyf/notyf.min.css';
import TaskList from "./Components/Task/TaskList";

function App() {

  return (
    <div className="w-full px-5">
      <h1 className="text-5xl text-center my-5 font-bold">Gestor de tareas</h1>
      <p className="text-center text-xl text-gray-500">Organiza tus tareas de forma eficiente. Visualiza, filtra y gestiona todas tus actividades en un solo lugar.</p>
      <TaskList />
    </div>
  );
}

export default App;
