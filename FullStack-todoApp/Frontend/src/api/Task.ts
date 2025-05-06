import { Task } from "../interfaces/Task";
import axios from "./axios";

export const getTasks = async () => {
  return axios
    .get("/task")
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const createTask = async (task: Task) => {
  return axios
    .post("/task", task)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
}