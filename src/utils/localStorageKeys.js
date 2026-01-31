import CryptoJS from "crypto-js";

const secretKey =
  process.env.REACT_APP_SECRET_KEY || "!@#$%%^&&seasense)(*&^&^%^";

export const storeUserDetails = (data) => {
  try {
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      secretKey,
    ).toString();
    localStorage.setItem("user", encryptedData);
  } catch (error) {}
};

export const getUserDetails = () => {
  try {
    const encryptedData = localStorage.getItem("user");
    if (!encryptedData) return null;

    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    if (decryptedData) {
      return JSON.parse(decryptedData);
    }
    return null;
  } catch (error) {
    return null;
  }
};
