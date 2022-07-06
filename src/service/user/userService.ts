import apiClient from "../../config/apiClient";
import { userInterface } from "../../interface/user/user.interface";

export const createUser = async (user: userInterface) => {
  return await apiClient.post("register", user);
};
export const userGetMe = async () => {
  return await apiClient.get("auth/me");
};
export const mailResetPassword = async (params: any) => {
  return await apiClient.post("mail-reset-password", params);
};

export const resetPassword = async (params: any) => {
  return await apiClient.post("resetPassword", params);
};

export const updateUser = async (data: any) => {
  const userId = localStorage.getItem("userId");
  return await apiClient.put(`update-user/${userId}`, data);
};
export const updatePersonalUser = async (data: any) => {
  return await apiClient.put(`update-personal`, data);
};
export const updateBillingUser = async (data: any) => {
  return await apiClient.put(`update-billing`, data);
};
