import axios from "axios";

const urls = axios.create({
  baseURL: "http://localhost:2900",
});

export const getAllEntries = async () => {
  try {
    return await urls.get("/data").then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const addNewEntries = async (data: any) => {
  try {
    return await urls.post("/data", data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
