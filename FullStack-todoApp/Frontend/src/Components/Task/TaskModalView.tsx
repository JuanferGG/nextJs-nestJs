import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Task } from "../../interfaces/Task";

export default function TaskModalView({
  IsOpenView,
  setOpenView,
  task,
}: {
  IsOpenView: boolean;
  setOpenView: (value: boolean) => void;
  task: Task;
}) {
  const { title, description, status, priority, image, createdAt } = task;
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Dialog open={IsOpenView} onClose={() => setOpenView(false)} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" transition />
      <div className="modalPosition">
        <div className="modalContainer">
          <DialogPanel className="dialogPanel">
            <div className="bg-white p-6">
              {/* Imagen de la tarea */}
              <div className="relative h-[300px] w-full mb-6 rounded-lg overflow-hidden">
                <img
                  src={`${import.meta.env.VITE_API_URL}${image}`}
                  alt="task-image"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido principal */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-3 capitalize">{title}</h2>
                  <p className="text-lg text-gray-600">{description}</p>
                </div>

                {/* Estado y Prioridad */}
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-700">Estado:</span>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {status ? "Completado" : "Pendiente"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-700">Prioridad:</span>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      priority === "high"
                        ? "bg-red-100 text-red-800"
                        : priority === "medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {priority === "high" ? "Alta" : priority === "medium" ? "Media" : "Baja"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Botón de cerrar */}
              <div className="mt-8 flex justify-between items-center">
                <div>
                  <span className="font-semibold text-gray-700">Fecha de creación:{formattedDate}</span>
                </div>
                <button
                  onClick={() => setOpenView(false)}
                  className="cursor-pointer px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
