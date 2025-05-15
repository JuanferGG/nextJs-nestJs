import { useState } from "react";
import type { Task } from "../../interfaces/Task";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useDeleteTask } from "../../Hooks/useTask";
import { UiNotyf } from "../UI/Notyf";
import TaskModalView from "./TaskModalView";
import TaskModalEdit from "./TaskModalEdit";

export default function TaskElement({ task }: { task: Task }) {
  const { mutate: deleteProduct } = useDeleteTask();
  const { _id, title, description, status, priority, image } = task;
  const [isOpen, setIsOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [editView, setEditView] = useState(false);

  const handleDelete = () => {
    deleteProduct(_id, {
      onSuccess: () => {
        UiNotyf.success("Tarea eliminada");
        setIsOpen(false);
      },
      onError: (error) => {
        console.log("Error al eliminar la tarea", error);
        UiNotyf.error("Error al eliminar la tarea");
      },
    });
  };

  return (
    <>
      <div
        className="flex flex-col flex-nowrap sm:w-full lg:w-[300px] shadow-lg hover:shadow-xl 
        transition-all duration-300 rounded-2xl overflow-hidden bg-white min-h-[450px] relative"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={`${import.meta.env.VITE_API_URL}${image}`}
            alt="img-task"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-5 flex flex-col gap-3 flex-grow">
          <h2 className="text-2xl font-semibold capitalize text-gray-800 line-clamp-1">
            {title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          <div className="flex justify-between items-center mt-2">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                status
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
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
          <div className="w-full absolute flex align-middle justify-center gap-2 bottom-4 left-0">
            <button
              className="cursor-pointer px-4 py-2 font-semibold bg-green-500/80
           text-white rounded-2xl hover:bg-green-600 transition-colors duration-300"
              onClick={() => setOpenView(true)}
            >
              Ver
            </button>
            <button
              className="cursor-pointer px-4 py-2 font-semibold bg-blue-500/80
           text-white rounded-2xl hover:bg-blue-600 transition-colors duration-300"
              onClick={() => setEditView(true)}
            >
              Editar
            </button>
            <button
              className="cursor-pointer px-4 py-2 font-semibold bg-red-500/80
           text-white rounded-2xl hover:bg-red-600 transition-colors duration-300"
              onClick={() => setIsOpen(true)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
      {/* TODO: Modal Delete */}
      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-10">
        <DialogBackdrop transition className="fixed inset-0 bg-gray-500/75" />
        <div className="modalPosition">
          <div className="modalContainer">
            <DialogPanel className="dialogPanel">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">
                  Eliminar Tarea
                </h2>
                <p className="my-3 text-xl text-gray-600">
                  ¿Estas seguro que deseas eliminar esta tarea?
                </p>
                <div className="w-full flex mt-5 justify-center gap-3">
                  <button
                    className="cursor-pointer bg-blue-500 text-white px-6 py-2 rounded-xl min-w-[100px]"
                    onClick={handleDelete}
                  >
                    Si
                  </button>
                  <button
                    className="cursor-pointer bg-red-500 text-white px-6 py-2 rounded-xl min-w-[100px]"
                    onClick={() => setIsOpen(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      {/* TODO: Modal View */}
      <TaskModalView
        IsOpenView={openView}
        setOpenView={setOpenView}
        task={task}
      />
      {/* TODO: Modal Edit */}
      <TaskModalEdit
        isOpenEdit={editView}
        setOpenEdit={setEditView}
        task={task}
      />
    </>
  );
}
