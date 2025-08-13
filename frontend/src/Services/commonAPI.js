import axios from "axios";

export const commonAPI = async (httpMethod, url, reqBody = "", reqHeader = null) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
    headers: reqHeader ? reqHeader : { "Content-Type": "application/json" },
  };

  try {
    const res = await axios(reqConfig);
    return { success: true, data: res.data, status: res.status };
  } catch (err) {
    return {
      success: false,
      data: err.response?.data || { message: err.message || "Unknown error" },
      status: err.response?.status || 500,
    };
  }
};
