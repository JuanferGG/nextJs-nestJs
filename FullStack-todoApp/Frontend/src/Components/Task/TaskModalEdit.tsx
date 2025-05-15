import { useState } from "react";
import { Task } from "../../interfaces/Task";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useUpdateTask } from "../../Hooks/useTask";
import { UiNotyf } from "../UI/Notyf";

export default function TaskModalEdit({
  isOpenEdit,
  setOpenEdit,
  task,
}: {
  isOpenEdit: boolean;
  setOpenEdit: (value: boolean) => void;
  task: Task;
}) {
  const { _id, title, description, priority, status } = task;
  const [formData, setFormData] = useState({
    title: title,
    description: description,
    priority: priority,
    status: status,
    image: null as File | null,
  });

  const { mutate } = useUpdateTask();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("priority", formData.priority);
    data.append("status", formData.status.toString());
    if (formData.image) {
      data.append("image", formData.image);
    }

    mutate({ id: _id, formData: data }, {
      onSuccess: () => {
        UiNotyf.success("Tarea Actualizada Exitosamente");
        setOpenEdit(false);
      },
      onError: (error) => {
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
    <Dialog
      open={isOpenEdit}
      onClose={() => setOpenEdit(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" transition />
      <div className="modalPosition">
        <div className="modalContainer">
          <DialogPanel className="dialogPanel">
            <div className="bg-white p-6">
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <label className="block text-xl/tight font-medium text-gray-700 mb-2">
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
                  <label className="block text-xl/tight font-medium text-gray-700 mb-2">
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
                  <label className="text-xl/tight font-medium text-gray-700">
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
                  <label className="block text-xl/tight font-medium text-gray-700 mb-2">
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
                  <label className="block text-xl/tight font-medium text-gray-700 mb-2">
                    Imagen
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageInput}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="cursor-pointer inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-400 sm:ml-3 sm:w-auto transition-all duration-300"
                >
                  Actualizar Tarea
                </button>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
