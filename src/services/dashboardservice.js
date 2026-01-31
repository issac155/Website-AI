export const getDashboard = async (credentials) => {
  try {
    const response = await api.get("api/last-contacts", credentials);

    // Check for successful response
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      // Server responded with error status
      const errorData = error.response.data;
      throw {
        message: errorData.message || "Request failed",
        status: error.response.status,
        data: errorData,
      };
    } else if (error.request) {
      // Request made but no response
      throw new Error("No response from server. Please check your connection.");
    } else {
      // Something else happened
      throw new Error("Failed. Please try again.");
    }
  }
};
