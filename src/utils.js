// import React from "react";
import axios from "axios";

const request = axios.create({
  baseURL: "/",
  timeout: 120000, // 1 Minute
});

export const callApi = async (endpoint, data = {}, method = "get") => {
  method = method === "get" ? "get" : "post";
  try {
    const sendData = method === "get" ? { params: data } : { ...data };
    const response = await request[method](endpoint, sendData);
    const resData = await response.data;
    return resData;
  } catch (error) {
    if (error) throw error.response.data;
    else {
      return {
        message: "Please check your internet connection and try again",
        title: "❌ Network Error",
      };
    }
  }
};
