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
    return console.log(error);
  }
};
