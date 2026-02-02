// ContactViewPopup.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEnvelope,
  faPhone,
  faBuilding,
  faCalendar,
  faEdit,
  faTrash,
  faReply,
  faPrint,
  faDownload,
  faPaperclip,
  faTimes,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import "../style/ContactView.css";

const ContactViewPopup = ({ contact, onClose, onUpdateContact }) => {
  const [replyText, setReplyText] = useState("");
  const [notes, setNotes] = useState("");
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState(null);

  // Initialize editedContact when contact changes
  useEffect(() => {
    if (contact) {
      setEditedContact({ ...contact });
    }
  }, [contact]);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";

    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return dateString;
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      0: { label: "Pending", class: "pending", color: "#f97316" },
      1: { label: "Responded", class: "responded", color: "#10b981" },
      pending: { label: "Pending", class: "pending", color: "#f97316" },
      responded: { label: "Responded", class: "responded", color: "#10b981" },
      true: { label: "Responded", class: "responded", color: "#10b981" },
      false: { label: "Pending", class: "pending", color: "#f97316" },
    };

    const statusValue = status?.toString();
    const config = statusConfig[statusValue] || {
      label: "Unknown",
      class: "unknown",
      color: "#6b7280",
    };

    return (
      <span
        className={`contactview-status-badge ${config.class}`}
        style={{ backgroundColor: config.color }}
      >
        {config.label}
      </span>
    );
  };

  const handleReply = () => {
    if (replyText.trim()) {
      // In real app, send email API call here
      alert("Reply sent successfully!");
      setReplyText("");
      setShowReplyForm(false);

      // Update contact status to responded (1)
      const updatedContact = {
        ...contact,
        isRead: "1",
        lastReplied: new Date().toISOString(),
      };

      if (onUpdateContact) {
        onUpdateContact(updatedContact);
      }
    }
  };

  const handleSaveNotes = () => {
    if (notes.trim()) {
      // In real app, save notes to API
      alert("Notes saved successfully!");

      const updatedContact = {
        ...contact,
        notes: notes,
      };

      if (onUpdateContact) {
        onUpdateContact(updatedContact);
      }
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      // In real app, delete API call
      alert("Contact deleted!");
      onClose();
    }
  };

  const handleStatusChange = (newStatus) => {
    const updatedContact = {
      ...contact,
      isRead: newStatus,
    };

    if (onUpdateContact) {
      onUpdateContact(updatedContact);
    }
  };

  const handleSaveEdit = () => {
    if (editedContact) {
      if (onUpdateContact) {
        onUpdateContact(editedContact);
      }
      setIsEditing(false);
      alert("Contact updated successfully!");
    }
  };

  const handleCancelEdit = () => {
    setEditedContact({ ...contact });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditedContact((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (!contact) {
    return (
      <div className="contactview-popup-overlay">
        <div className="contactview-popup-content contactview-not-found">
          <h3>Contact not found</h3>
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contactview-popup-overlay" onClick={onClose}>
      <div
        className="contactview-popup-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="contactview-popup-header">
          <div className="contactview-popup-title">
            <h2>{contact.service || "No Service"}</h2>
          </div>
          <button className="contactview-close-popup-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="contactview-popup-body">
          {/* Action Buttons */}

          {/* Reply Form */}
          {showReplyForm && (
            <div className="contactview-reply-form">
              <h4>Reply to {contact.name}</h4>
              <div className="contactview-email-preview">
                <div>
                  <strong>To:</strong> {contact.email}
                </div>
                <div>
                  <strong>Subject:</strong> Re: {contact.subject}
                </div>
              </div>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your reply here..."
                rows={5}
                className="contactview-reply-textarea"
              />
              <div className="contactview-reply-actions">
                <button onClick={handleReply} className="contactview-send-btn">
                  Send Reply
                </button>
                <button
                  onClick={() => setShowReplyForm(false)}
                  className="contactview-cancel-btn"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="contactview-info-section">
            <div className="contactview-header">
              <h3>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedContact?.name || ""}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="contactview-edit-input"
                  />
                ) : (
                  contact.name || "No Name"
                )}
              </h3>
              {contact.company && (
                <span className="contactview-company-badge">
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedContact?.company || ""}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className="contactview-edit-input company"
                    />
                  ) : (
                    contact.company
                  )}
                </span>
              )}
            </div>

            <div className="contactview-details-grid">
              <div className="contactview-detail-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedContact?.email || ""}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="contactview-edit-input"
                    />
                  ) : (
                    contact.email || "No Email"
                  )}
                </span>
              </div>
              <div className="contactview-detail-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={
                        editedContact?.phone || editedContact?.phoneNumber || ""
                      }
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="contactview-edit-input"
                    />
                  ) : (
                    contact.phone || contact.phoneNumber || "N/A"
                  )}
                </span>
              </div>
              {contact.address && (
                <div className="contactview-detail-item">
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedContact?.address || ""}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        className="contactview-edit-input"
                      />
                    ) : (
                      contact.address
                    )}
                  </span>
                </div>
              )}
              <div className="contactview-detail-item">
                <FontAwesomeIcon icon={faCalendar} />
                <span>
                  Received:{" "}
                  {formatDate(
                    contact.created_at || contact.createdAt || contact.date,
                  )}
                </span>
              </div>
            </div>

            {/* Additional Information if exists */}
            {(contact.projectType || contact.budget || contact.timeline) && (
              <div className="contactview-project-details">
                {contact.projectType && (
                  <div className="contactview-project-item">
                    <strong>Project Type:</strong> {contact.projectType}
                  </div>
                )}
                {contact.budget && (
                  <div className="contactview-project-item">
                    <strong>Budget:</strong> {contact.budget}
                  </div>
                )}
                {contact.timeline && (
                  <div className="contactview-project-item">
                    <strong>Timeline:</strong> {contact.timeline}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Message */}
          <div className="contactview-message-section">
            <h4>Message</h4>
            <div className="contactview-message-content">
              {isEditing ? (
                <textarea
                  value={editedContact?.message || ""}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="contactview-edit-textarea"
                  rows={6}
                />
              ) : (
                contact.message || "No message provided"
              )}
            </div>
          </div>

          {/* Attachments */}
          {contact.attachments && contact.attachments.length > 0 && (
            <div className="contactview-attachments-section">
              <h4>
                <FontAwesomeIcon icon={faPaperclip} />
                Attachments ({contact.attachments.length})
              </h4>
              <div className="contactview-attachments-list">
                {contact.attachments.map((attachment, index) => (
                  <div key={index} className="contactview-attachment-item">
                    <FontAwesomeIcon icon={faPaperclip} />
                    <span>{attachment}</span>
                    <button className="contactview-download-btn">
                      <FontAwesomeIcon icon={faDownload} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes Section */}

          {/* Save Edit Button (when editing) */}
        </div>
      </div>
    </div>
  );
};

export default ContactViewPopup;
