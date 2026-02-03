import api from "../config/api";

export const saveContact = async (credentials) => {
  try {
    const response = await api.post("api/save-contact", credentials);

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

// api/contactApi.js
export const getContact = async (credentials) => {
  try {
    const queryParams = new URLSearchParams();

    if (credentials.sRead) queryParams.append("isRead", credentials.sRead);
    if (credentials.search) queryParams.append("search", credentials.search);
    if (credentials.page) queryParams.append("page", credentials.page);
    if (credentials.limit) queryParams.append("per_page", credentials.limit);

    const queryString = queryParams.toString();
    const url = `api/contacts${queryString ? `?${queryString}` : ""}`;

    const response = await api.get(
      url,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    if (error.response) {
      const errorData = error.response.data;
      throw {
        message: errorData.message || "Request failed",
        status: error.response.status,
        data: errorData,
      };
    } else if (error.request) {
      throw new Error("No response from server. Please check your connection.");
    } else {
      throw new Error("Failed to fetch contacts. Please try again.");
    }
  }
};

// services/contactservice.js
export const deleteContact = async (contactId) => {
  // Accept just the ID
  try {
    const response = await api.delete(`api/delete-contact/${contactId}`); // Use DELETE method

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
export const updateContactStatus = async (contactId, data) => {
  // Accept just the ID
  try {
    const response = await api.put(
      `api/contact-read-status/${contactId}`,
      data,
    ); // Use DELETE method

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
