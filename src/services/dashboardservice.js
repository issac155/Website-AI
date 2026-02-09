import api from "../config/api";

export const getDashboard = async () => {
  try {
    const response = await api.get("api/contacts-dashboard");

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }

    throw new Error(`Request failed with status ${response.status}`);
  } catch (error) {
    if (error.response) {
      const errorData = error.response.data;

      const customError = new Error(errorData.message || "Request failed");

      customError.status = error.response.status;
      customError.data = errorData;

      throw customError;
    }

    if (error.request) {
      throw new Error("No response from server. Please check your connection.");
    }

    throw new Error("Failed. Please try again.");
  }
};
