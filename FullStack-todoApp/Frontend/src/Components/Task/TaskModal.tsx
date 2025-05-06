import { useState } from "react";
import { Task } from "../../interfaces/Task";
import { Notyf } from "notyf";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { createTask } from "../../api/Task";

interface TaskModalProps {
  onTaskCreated: () => void;
}

export default function TaskModal({ onTaskCreated }: TaskModalProps) {
  const notyf = new Notyf({
    duration: 2000,
    position: {
      x: "left",
      y: "bottom",
    },
    dismissible: true,
  });
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: false,
    priority: "low",
    image: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTask(formData as Task);
      setOpen(false);
      onTaskCreated();
      notyf.success("Tarea creada con éxito");
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10"></div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Crea una tarea
                    </DialogTitle>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 z-50">
                          Título
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.title}
                          onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                          }
                          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Descripción
                        </label>
                        <textarea
                          required
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              description: e.target.value,
                            })
                          }
                          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-gray-700">
                          Estado
                        </label>
                        <input
                          type="checkbox"
                          checked={formData.status}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              status: e.target.checked,
                            })
                          }
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Prioridad
                        </label>
                        <select
                          value={formData.priority}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              priority: e.target.value,
                            })
                          }
                          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="low">Baja</option>
                          <option value="medium">Media</option>
                          <option value="high">Alta</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Imagen
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              image: e.target.files?.[0]?.name || "",
                            })
                          }
                          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="submit"
                          className="cursor-pointer inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-400 sm:ml-3 sm:w-auto transition-all duration-300"
                        >
                          Agregar Tarea
                        </button>
                        <button
                          type="button"
                          data-autofocus
                          onClick={() => setOpen(false)}
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer fixed text-xl bottom-5 right-5 bg-green-500/90 rounded-2xl px-2 text-white font-semibold"
      >
        Agregar Tarea
      </button>
    </>
  );
}
