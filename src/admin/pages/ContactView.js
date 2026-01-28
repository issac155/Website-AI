// ContactView.js
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
} from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import "../style/ContactView.css";

const ContactView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [replyText, setReplyText] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    // Mock API call
    const mockContact = {
      id: 1,
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
  }, [id]);

  const handleReply = () => {
    if (replyText.trim()) {
      alert("Reply sent successfully!");
      setReplyText("");
    }
  };

  const handleSaveNotes = () => {
    if (notes.trim()) {
      alert("Notes saved successfully!");
    }
  };

  if (loading) {
    return <div className="loading">Loading contact details...</div>;
  }

  if (!contact) {
    return <div className="not-found">Contact not found</div>;
  }

  return (
    <div className="contact-view">
      <div className="view-header">
        <button
          className="back-btn"
          onClick={() => navigate("/dashboard/contacts")}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Contacts
        </button>

        <div className="header-actions">
          <button className="action-btn print-btn">
            <FontAwesomeIcon icon={faPrint} />
            Print
          </button>
          <button className="action-btn export-btn">
            <FontAwesomeIcon icon={faDownload} />
            Export
          </button>
          <button className="action-btn delete-btn">
            <FontAwesomeIcon icon={faTrash} />
            Delete
          </button>
        </div>
      </div>

      <div className="contact-details-card">
        <div className="card-header">
          <div className="contact-title">
            <h2>{contact.subject}</h2>
            <div className={`status-badge ${contact.status}`}>
              {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
            </div>
          </div>
          <button className="edit-btn">
            <FontAwesomeIcon icon={faEdit} />
            Edit Contact
          </button>
        </div>

        <div className="contact-info-grid">
          <div className="info-section">
            <div className="info-item">
              <FontAwesomeIcon icon={faBuilding} className="info-icon" />
              <div className="info-content">
                <label>Company</label>
                <p>{contact.company}</p>
              </div>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
              <div className="info-content">
                <label>Email</label>
                <p>{contact.email}</p>
              </div>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} className="info-icon" />
              <div className="info-content">
                <label>Phone</label>
                <p>{contact.phone}</p>
              </div>
            </div>
          </div>

          <div className="info-section">
            <div className="info-item">
              <FontAwesomeIcon icon={faCalendar} className="info-icon" />
              <div className="info-content">
                <label>Date Received</label>
                <p>{contact.date}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-content">
                <label>Project Type</label>
                <p>{contact.projectType}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-content">
                <label>Estimated Budget</label>
                <p>{contact.budget}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="message-section">
          <h3>Message</h3>
          <div className="message-content">
            <p>{contact.message}</p>
          </div>

          {contact.attachments && contact.attachments.length > 0 && (
            <div className="attachments">
              <h4>
                <FontAwesomeIcon icon={faPaperclip} />
                Attachments ({contact.attachments.length})
              </h4>
              <div className="attachment-list">
                {contact.attachments.map((file, index) => (
                  <div key={index} className="attachment-item">
                    <span>{file}</span>
                    <button className="download-attachment">Download</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="actions-section">
          <div className="reply-section">
            <h3>Send Reply</h3>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Type your reply here..."
              rows="4"
            />
            <div className="reply-actions">
              <button className="send-reply-btn" onClick={handleReply}>
                <FontAwesomeIcon icon={faReply} />
                Send Reply
              </button>
              <button className="save-template-btn">Save as Template</button>
            </div>
          </div>

          <div className="notes-section">
            <h3>Internal Notes</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add internal notes here..."
              rows="4"
            />
            <div className="notes-actions">
              <button className="save-notes-btn" onClick={handleSaveNotes}>
                Save Notes
              </button>
              <button className="clear-notes-btn" onClick={() => setNotes("")}>
                Clear
              </button>
            </div>
          </div>
        </div>

        <div className="activity-section">
          <h3>Activity History</h3>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <p>Contact created - {contact.date}</p>
                <span className="activity-time">10:30 AM</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot"></div>
              <div className="activity-content">
                <p>Status changed to "New"</p>
                <span className="activity-time">10:32 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
