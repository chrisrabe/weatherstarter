import axios from "axios";

export const getInstance = (baseURL: string) => {
  return axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
    },
  });
};
