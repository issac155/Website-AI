import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faEnvelope,
  faLock,
  faArrowRight,
  faChartLine,
  faUsersCog,
  faBuilding,
  faShieldAlt,
  faCogs,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFocus = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused((prev) => ({ ...prev, [field]: false }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyPressEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    let newErrors = {};
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);
        // Simulated API call
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } catch (error) {
        setErrors({
          response_error: "Invalid credentials. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="login-container">
      {/* Background Elements */}
      <div className="gold-ornament top-left"></div>
      <div className="gold-ornament bottom-right"></div>
      <div className="gold-accent-line"></div>

      <div className="login-card">
        {/* Left Side - Admin Features */}
        <div className="admin-info-section">
          <div className="admin-content">
            <div className="admin-header">
              <div className="admin-logo">
                <div className="logo-icon">
                  <FontAwesomeIcon icon={faBuilding} />
                </div>
                <div className="logo-text">
                  <h1>
                    Engineering<span>Solutions</span>
                  </h1>
                  <p className="admin-subtitle">Administration Portal</p>
                </div>
              </div>
            </div>

            <div className="admin-welcome">
              <h2>
                Welcome to
                <br />
                Your Control Center
              </h2>
              <p>
                Manage your engineering projects, teams, and resources from a
                single, powerful dashboard.
              </p>
            </div>

            <div className="admin-features">
              <div className="admin-feature">
                <div className="feature-icon-wrapper">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div className="feature-text">
                  <h4>Analytics Dashboard</h4>
                  <p>Real-time project insights and performance metrics</p>
                </div>
              </div>

              {/* <div className="admin-feature">
                <div className="feature-icon-wrapper">
                  <FontAwesomeIcon icon={faUsersCog} />
                </div>
                <div className="feature-text">
                  <h4>Team Management</h4>
                  <p>Manage engineers, assign tasks, and track progress</p>
                </div>
              </div>

              <div className="admin-feature">
                <div className="feature-icon-wrapper">
                  <FontAwesomeIcon icon={faDatabase} />
                </div>
                <div className="feature-text">
                  <h4>Project Database</h4>
                  <p>Access all project documents and specifications</p>
                </div>
              </div> */}

              <div className="admin-feature">
                <div className="feature-icon-wrapper">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="feature-text">
                  <h4>Contact Us</h4>
                  <p>View and manage customer contact messages</p>
                </div>
              </div>
            </div>

            <div className="admin-tips">
              <h4>Contact Us – Admin Tips:</h4>
              <ul>
                <li>Check new contact messages daily</li>
                <li>Respond to customer queries promptly</li>
                <li>Mark resolved messages to avoid duplicates</li>
                <li>Escalate critical issues to the support team</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="login-form-section">
          <div className="form-wrapper">
            <div className="form-header">
              <h3>Admin Login</h3>
              <p>Enter your credentials to access the admin panel</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="input-field">
                <label htmlFor="email">Admin Email</label>
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPressEnter}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                    className={errors.email ? "error" : ""}
                    placeholder="admin@engineering.com"
                  />
                  <div className="input-underline"></div>
                </div>
                {errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}
              </div>

              <div className="input-field">
                <label htmlFor="password">Admin Password</label>
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faLock} className="input-icon" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPressEnter}
                    onFocus={() => handleFocus("password")}
                    onBlur={() => handleBlur("password")}
                    className={errors.password ? "error" : ""}
                    placeholder="••••••••"
                  />
                  <div className="input-underline"></div>
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
                {errors.password && (
                  <span className="error-text">{errors.password}</span>
                )}
              </div>

              {/* <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember this device
                </label>
                <Link to="/admin/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>
              </div> */}

              {errors.response_error && (
                <div className="alert-error">
                  <span className="alert-icon">!</span>
                  {errors.response_error}
                </div>
              )}

              <button type="submit" className="login-button" disabled={loading}>
                {loading ? (
                  <span className="spinner"></span>
                ) : (
                  <>
                    Access Admin Panel
                    <FontAwesomeIcon icon={faArrowRight} />
                  </>
                )}
              </button>
            </form>

            {/* <div className="form-footer">
              <div className="security-info">
                <FontAwesomeIcon icon={faShieldAlt} />
                <div className="security-text">
                  <strong>Enterprise Security</strong>
                  <p>All data is encrypted and access is logged</p>
                </div>
              </div>

              <div className="support-link">
                <p>
                  Need help?{" "}
                  <Link to="/admin/support">Contact System Administrator</Link>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
