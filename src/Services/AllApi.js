import { BaseUrl } from "./BaseUrl";
import commonApi from "./commonApi";

export const getStudent = async () => {
  return await commonApi("get", `${BaseUrl}/students`, "");
};

export const createStudent = async (studentData) => {
  return await commonApi("post", `${BaseUrl}/students`, studentData);
};

export const deleteStudent = async (id) => {
  return await commonApi("delete", `${BaseUrl}/students/${id}`, {});
};

export const editStudent = async (id, studentData) => {
  return await commonApi("put", `${BaseUrl}/students/${id}`, studentData);
};
