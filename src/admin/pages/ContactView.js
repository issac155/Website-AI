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
} from "@fortawesome/free-solid-svg-icons";
import "../style/ContactView.css";

const ContactViewPopup = ({ contactId, onClose, onUpdateContact }) => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [replyText, setReplyText] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    // Mock API call
    const mockContact = {
      id: contactId,
      name: "Ahmed Al-Maskari",
      email: "ahmed@example.com",
      phone: "+968 1234 5678",
      subject: "Project Inquiry",
      message:
        "I would like to inquire about your MEP services for our new building project in Muscat. We are planning a 20-story commercial building with full MEP requirements including HVAC, electrical, plumbing, and fire protection systems. Could you please provide a quotation and timeline for the complete project?",
      date: "2024-01-15",
      status: "new",
      company: "Oman Construction LLC",
      address: "Muscat, Oman",
      projectType: "Commercial Building",
      budget: "1,500,000 OMR",
      timeline: "12-18 months",
      attachments: ["project_specs.pdf", "site_plan.jpg"],
    };

    setContact(mockContact);
    setLoading(false);
  }, [contactId]);

  const handleReply = () => {
    if (replyText.trim()) {
      alert("Reply sent successfully!");
      setReplyText("");
      // In real app, update contact status
      if (onUpdateContact) {
        onUpdateContact({ ...contact, status: "responded" });
      }
    }
  };

  const handleSaveNotes = () => {
    if (notes.trim()) {
      alert("Notes saved successfully!");
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      alert("Contact deleted!");
      onClose();
    }
  };

  const handleStatusChange = (newStatus) => {
    const updatedContact = { ...contact, status: newStatus };
    setContact(updatedContact);
    if (onUpdateContact) {
      onUpdateContact(updatedContact);
    }
  };

  if (loading) {
    return (
      <div className="contactview-popup-overlay">
        <div className="contactview-popup-content contactview-loading">
          <div className="contactview-loading-spinner"></div>
          <p>Loading contact details...</p>
        </div>
      </div>
    );
  }

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
            <h2>{contact.subject}</h2>
            <div className={`contactview-status-badge ${contact.status}`}>
              {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
            </div>
          </div>
          <button className="contactview-close-popup-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="contactview-popup-body">
          {/* Status Toggle */}

          {/* Contact Information */}
          <div className="contactview-info-section">
            <div className="contactview-header">
              <h3>{contact.name}</h3>
              <span className="contactview-company-badge">
                {contact.company}
              </span>
            </div>

            <div className="contactview-details-grid">
              <div className="contactview-detail-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>{contact.email}</span>
              </div>
              <div className="contactview-detail-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>{contact.phone}</span>
              </div>
              <div className="contactview-detail-item">
                <FontAwesomeIcon icon={faBuilding} />
                <span>{contact.address}</span>
              </div>
              <div className="contactview-detail-item">
                <FontAwesomeIcon icon={faCalendar} />
                <span>Received: {contact.date}</span>
              </div>
            </div>

            {/* <div className="contactview-project-details">
              <div className="contactview-project-item">
                <strong>Project Type:</strong> {contact.projectType}
              </div>
              <div className="contactview-project-item">
                <strong>Budget:</strong> {contact.budget}
              </div>
              <div className="contactview-project-item">
                <strong>Timeline:</strong> {contact.timeline}
              </div>
            </div> */}
          </div>

          {/* Message */}
          <div className="contactview-message-section">
            <h4>Message</h4>
            <div className="contactview-message-content">{contact.message}</div>
          </div>

          {/* Attachments */}
        </div>
      </div>
    </div>
  );
};

export default ContactViewPopup;
