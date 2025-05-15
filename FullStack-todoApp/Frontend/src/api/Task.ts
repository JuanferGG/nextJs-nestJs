// import { Task } from "../interfaces/Task";
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

export const createTask = async (formData: FormData) => {
  try {
    const response = await axios.post("/task", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    // console.log(error);
    return Promise.reject(error);
  }
};

export const deleteTask = async (id: string) => {
  return axios
    .delete(`/task/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const updateTask = async (id: string, formData: FormData) => {
  return axios
    .patch(`/task/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
