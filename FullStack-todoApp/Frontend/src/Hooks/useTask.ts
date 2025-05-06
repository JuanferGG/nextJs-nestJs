import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTask, getTasks } from "../api/Task";
import { Task } from "../interfaces/Task";

export const useTask = () => {
  return useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      console.log("Error al crear la orden:", error);
    },
  });
};
