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
