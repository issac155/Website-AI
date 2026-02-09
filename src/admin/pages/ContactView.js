// ContactViewPopup.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faBuilding,
  faCalendar,
  faDownload,
  faPaperclip,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../style/ContactView.css";

const ContactViewPopup = ({ contact, onClose, onUpdateContact }) => {
  const [replyText, setReplyText] = useState("");
  const [showReplyForm, setShowReplyForm] = useState(false);

  // Initialize editedContact when contact changes

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
              <h3>{contact.name || "No Name"}</h3>
              {contact.company && (
                <span className="contactview-company-badge">
                  {contact.company}
                </span>
              )}
            </div>

            <div className="contactview-details-grid">
              <div className="contactview-detail-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>{contact.email || "No Email"}</span>
              </div>
              <div className="contactview-detail-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>{contact.phone || contact.phoneNumber || "N/A"}</span>
              </div>
              {contact.address && (
                <div className="contactview-detail-item">
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>{contact.address}</span>
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
              {contact.message || "No message provided"}
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
