import { useState } from "react";
import { Task } from "../../interfaces/Task";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { createTask } from "../../api/Task";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTaskCreated: () => void;
}

export default function TaskModal({
  isOpen,
  onClose,
  onTaskCreated,
}: TaskModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: false,
    priority: "low",
    image: "",
  });

  // Animación para el modal
  const modalClasses = isOpen
    ? "opacity-100 scale-100 pointer-events-auto"
    : "opacity-0 scale-95 pointer-events-none";

  if (typeof window !== "undefined") {
    // Evitar scroll cuando el modal está abierto
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTask(formData as Task);
      onTaskCreated();
      onClose();
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return (
    <>
      {/* Botón flotante '+' */}
      {!isOpen && (
        <button
          aria-label="Crear nueva tarea"
          onClick={onClose}
          className="cursor-pointer fixed z-50 bottom-6 right-6 bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-4xl hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
        >
          +
        </button>
      )}
      {/* Modal */}
      <div
        className={`fixed top-0 left-0 inset-0 bg-cyan-200/50 bg-opacity-50 flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${modalClasses}`}
        style={{ zIndex: 1000 }}
        aria-modal="true"
        role="dialog"
      >
        <div
          className={`bg-white rounded-lg p-6 w-full max-w-md transform transition-all duration-300 ease-in-out ${modalClasses}`}
          style={{ minHeight: "auto" }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Nueva Tarea</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              aria-label="Cerrar modal"
            >
              ✕
            </button>
          </div>

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
                  setFormData({ ...formData, description: e.target.value })
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
                  setFormData({ ...formData, status: e.target.checked })
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
                  setFormData({ ...formData, priority: e.target.value })
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

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Crear Tarea
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
