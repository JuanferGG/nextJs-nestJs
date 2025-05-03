import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/Task";
import { Task } from "../interfaces/Task";

export const useTask = () => {
    return useQuery<Task[]>({
        queryKey: ["tasks"],
        queryFn: getTasks
    })
}