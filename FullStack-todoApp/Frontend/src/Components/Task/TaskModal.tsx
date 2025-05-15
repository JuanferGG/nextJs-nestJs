import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useCreateTask } from "../../Hooks/useTask";
import { CiCirclePlus, CiGrid32 } from "react-icons/ci";
import { UiNotyf } from "../UI/Notyf";

interface TaskModalProps {
  onTaskCreated: () => void;
}

export default function TaskModal({ onTaskCreated }: TaskModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: false,
    priority: "low",
    image: null as File | null,
  });

  const { mutate } = useCreateTask();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("status", String(formData.status));
    data.append("priority", formData.priority);
    if (formData.image) {
      data.append("image", formData.image);
    }

    mutate(data, {
      onSuccess: () => {
        setOpen(false);
        UiNotyf.success("Tarea creada correctamente");
        onTaskCreated();
        setFormData({
          title: "",
          description: "",
          status: false,
          priority: "low",
          image: null as File | null,
        });
      },
      onError: (error) => {
        setOpen(true);
        if (Array.isArray(error.response.data.message)) {
          error.response.data.message.map((err) => UiNotyf.error(err.message));
        } else if (error.response.data.message) {
          UiNotyf.error(error.response.data.message);
        }
      },
    });
  };

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, image: file });
  };

  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-400 sm:mx-0 sm:size-10">
                    <CiGrid32 className="text-2xl text-white" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <DialogTitle
                      as="h3"
                      className="text-xl font-bold text-gray-800"
                    >
                      Crea una tarea
                    </DialogTitle>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <div>
                        <label className="block text-xl/tight font-medium text-gray-700 mb-1">
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
                        <label className="block text-xl/tight font-medium text-gray-700 mb-1">
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
                        <label className="font-semibold text-xl/tight text-gray-700">
                          Estado:
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
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>

                      <div>
                        <label className="block text-xl/tight font-medium text-gray-700 mb-1">
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
                        <label className="block text-xl/tight font-medium text-gray-700 mb-1">
                          Imagen
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageInput}
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
                          onClick={() => setOpen(false)}
                          className="cursor-pointer mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                          Cancelar
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
        onClick={() => setOpen(true)}
        className="cursor-pointer fixed text-2xl bottom-5 right-5 bg-green-500/90 rounded-2xl border 
        px-2 py-2 text-white font-semibold hover:bg-white hover:text-green-500 transition-all duration-300"
      >
        <CiCirclePlus />
      </button>
    </>
  );
}
