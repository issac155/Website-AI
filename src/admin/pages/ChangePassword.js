// ContactUs.js
import React, { useState } from "react";
import {
  FiEye,
  FiEyeOff,
  FiLock,
  FiCheck,
  FiAlertCircle,
  FiShield,
} from "react-icons/fi";

import "../style/ChangePassword.css";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { getUserDetails } from "../../utils/localStorageKeys";
import { changepassword } from "../../services/authservice";
import { useNavigate } from "react-router-dom";
const ChangePassword = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");
  const navigate = useNavigate();

  // Password state
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // UI state
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const userDetsils = getUserDetails();
  console.log(userDetsils);
  // Password strength indicators
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  const checkPasswordStrength = (password) => {
    setPasswordStrength({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "newPassword") {
      checkPasswordStrength(value);
    }

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!passwordData.currentPassword.trim()) {
      newErrors.currentPassword = "Current password is required";
    }

    if (!passwordData.newPassword.trim()) {
      newErrors.newPassword = "New password is required";
    } else if (passwordData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    }

    if (!passwordData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (passwordData.currentPassword === passwordData.newPassword) {
      newErrors.newPassword =
        "New password must be different from current password";
    }

    return newErrors;
  };

  const calculatePasswordStrengthScore = () => {
    const criteria = Object.values(passwordStrength);
    const passed = criteria.filter((c) => c).length;
    return Math.floor((passed / criteria.length) * 100);
  };

  const getStrengthColor = (score) => {
    if (score < 40) return "#ff4d4d";
    if (score < 70) return "#ffa500";
    return "#52c41a";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      // Simulate API call
      //   await new Promise((resolve) => setTimeout(resolve, 1500));
      await changepassword({
        userId: userDetsils.userId,
        newPassword: passwordData.confirmPassword,
        oldPassword: passwordData.currentPassword,
      });
      setMessage({
        type: "success",
        text: "Password changed successfully! You can now use your new password to log in.",
      });

      // Reset form
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setPasswordStrength({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false,
      });
      localStorage.clear();
      navigate("/admin", { replace: true });
      setErrors({});
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error.response?.data?.message ||
          "Failed to change password. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const PasswordStrengthIndicator = () => {
    const score = calculatePasswordStrengthScore();
    const color = getStrengthColor(score);

    return (
      <div className="password-strength">
        <div className="strength-header">
          <span className="strength-label">Password Strength</span>
          <span className="strength-score" style={{ color }}>
            {score}%
          </span>
        </div>
        <div className="strength-bar">
          <div
            className="strength-fill"
            style={{
              width: `${score}%`,
              backgroundColor: color,
            }}
          />
        </div>
        <div className="strength-criteria">
          {Object.entries(passwordStrength).map(([key, value]) => (
            <div key={key} className="criterion">
              <span className={`criterion-icon ${value ? "passed" : ""}`}>
                {value ? <FiCheck /> : "•"}
              </span>
              <span className="criterion-text">
                {key === "length" && "At least 8 characters"}
                {key === "uppercase" && "Uppercase letter"}
                {key === "lowercase" && "Lowercase letter"}
                {key === "number" && "Contains number"}
                {key === "special" && "Special character"}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard-layout">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <main className="dashboard-main-content">
        <Header activeTab={activeTab} />

        <div className="change-password-wrapper">
          <div className="change-password-container">
            {/* <div className="change-password-header">
              <div className="header-icon">
                <FiShield />
              </div>
              <div className="header-content">
                <h1>Update Password</h1>
                <p>Secure your account with a new password</p>
              </div>
            </div> */}

            <div className="change-password-card">
              <div className="card-decoration"></div>

              <form onSubmit={handleSubmit} className="change-password-form">
                {message.text && (
                  <div className={`message-banner ${message.type}`}>
                    <FiAlertCircle className="message-icon" />
                    <span>{message.text}</span>
                  </div>
                )}

                <div className="input-group">
                  <div className="input-label">
                    <FiLock />
                    <span>Current Password</span>
                  </div>
                  <div className="input-wrapper">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      name="currentPassword"
                      className={`password-input ${errors.currentPassword ? "error" : ""}`}
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      placeholder="Enter your current password"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                    >
                      {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  {errors.currentPassword && (
                    <div className="input-error">
                      <FiAlertCircle />
                      <span>{errors.currentPassword}</span>
                    </div>
                  )}
                </div>

                <div className="input-group">
                  <div className="input-label">
                    <FiLock />
                    <span>New Password</span>
                  </div>
                  <div className="input-wrapper">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      name="newPassword"
                      className={`password-input ${errors.newPassword ? "error" : ""}`}
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      placeholder="Create a strong new password"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  {passwordData.newPassword && <PasswordStrengthIndicator />}
                  {errors.newPassword && (
                    <div className="input-error">
                      <FiAlertCircle />
                      <span>{errors.newPassword}</span>
                    </div>
                  )}
                </div>

                <div className="input-group">
                  <div className="input-label">
                    <FiLock />
                    <span>Confirm New Password</span>
                  </div>
                  <div className="input-wrapper">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      className={`password-input ${errors.confirmPassword ? "error" : ""}`}
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      placeholder="Re-enter your new password"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <div className="input-error">
                      <FiAlertCircle />
                      <span>{errors.confirmPassword}</span>
                    </div>
                  )}
                </div>

                <div className="security-tips">
                  <h3>
                    <FiShield />
                    Security Recommendations
                  </h3>
                  <ul>
                    <li>Use a unique password for this account</li>
                    <li>Don't use personal information like birthdays</li>
                    <li>Consider using a password manager</li>
                    <li>Change your password every 90 days</li>
                  </ul>
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Updating Password...
                      </>
                    ) : (
                      "Update Password"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChangePassword;
