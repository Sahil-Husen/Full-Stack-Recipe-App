import axiosInstance from "./baseInstance";

// ✅ Updated login function (accepts full formData object)
export const login = async (formData) => {
  return axiosInstance.post("/api/auth/login", formData);
};


export const signup = async (userData) => {
  return axiosInstance.post("/api/auth/signUp", userData);
};

export const getRecipe = async (recipes)=>{
  return axiosInstance.get("/api/recepe/getRecepes",recipes);
}