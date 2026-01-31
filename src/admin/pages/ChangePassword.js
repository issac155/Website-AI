// ChangePasswordPopup3.js - Step-by-Step
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEye,
  faEyeSlash,
  faCheckCircle,
  faArrowRight,
  faShieldCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../style/ChangePasswordPopup.css";

const ChangePasswordPopup = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const steps = [
    {
      number: 1,
      title: "Verify Identity",
      description: "Enter your current password",
    },
    {
      number: 2,
      title: "Set New Password",
      description: "Create a strong new password",
    },
    {
      number: 3,
      title: "Confirmation",
      description: "Confirm your new password",
    },
  ];

  const calculateStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/\d/.test(password) || /[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit form
      onClose();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-content">
            <div className="step-icon">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <h3>Verify Your Identity</h3>
            <p>Enter your current password to continue</p>

            <div className="input-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Current Password"
                value={formData.current}
                onChange={(e) =>
                  setFormData({ ...formData, current: e.target.value })
                }
              />
              <button
                type="button"
                className="toggle-visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <div className="step-icon">
              <FontAwesomeIcon icon={faShieldCheck} />
            </div>
            <h3>Create New Password</h3>
            <p>Choose a strong password to secure your account</p>

            <div className="input-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={formData.new}
                onChange={(e) => {
                  setFormData({ ...formData, new: e.target.value });
                  setPasswordStrength(calculateStrength(e.target.value));
                }}
              />
              <button
                type="button"
                className="toggle-visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>

            <div className="strength-indicator">
              <div className="strength-label">
                <span>Password Strength:</span>
                <span
                  className={`strength-value strength-${Math.floor(passwordStrength / 25)}`}
                >
                  {passwordStrength < 50
                    ? "Weak"
                    : passwordStrength < 75
                      ? "Fair"
                      : "Strong"}
                </span>
              </div>
              <div className="strength-meter">
                <div
                  className={`strength-segment ${passwordStrength >= 25 ? "active" : ""}`}
                ></div>
                <div
                  className={`strength-segment ${passwordStrength >= 50 ? "active" : ""}`}
                ></div>
                <div
                  className={`strength-segment ${passwordStrength >= 75 ? "active" : ""}`}
                ></div>
                <div
                  className={`strength-segment ${passwordStrength === 100 ? "active" : ""}`}
                ></div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="step-content">
            <div className="step-icon">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <h3>Confirm Password</h3>
            <p>Re-enter your new password to confirm</p>

            <div className="input-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm New Password"
                value={formData.confirm}
                onChange={(e) =>
                  setFormData({ ...formData, confirm: e.target.value })
                }
              />
              <button
                type="button"
                className="toggle-visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>

            {formData.confirm && formData.new === formData.confirm && (
              <div className="match-indicator">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Passwords match!</span>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="step-overlay" onClick={onClose}>
      <div className="step-popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h2>Change Password</h2>
          <button className="close-step" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="progress-steps">
          {steps.map((s) => (
            <div
              key={s.number}
              className={`step ${step >= s.number ? "active" : ""}`}
            >
              <div className="step-number">{s.number}</div>
              <div className="step-info">
                <div className="step-title">{s.title}</div>
                <div className="step-description">{s.description}</div>
              </div>
              {s.number < 3 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

        {renderStep()}

        <div className="step-actions">
          {step > 1 && (
            <button className="btn-back" onClick={handleBack}>
              Back
            </button>
          )}
          <button className="btn-next" onClick={handleNext}>
            {step === 3 ? "Update Password" : "Continue"}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPopup;
