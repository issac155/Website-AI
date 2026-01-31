// ContactUs.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrash,
  faReply,
  faPhone,
  faEnvelope,
  faCalendar,
  faFilter,
  faSort,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../style/ContactUs.css";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import ContactViewPopup from "./ContactView";

const ContactUs = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  // Mock data - replace with API call
  const [selectedContactId, setSelectedContactId] = useState(null);

  const handleContactClick = (contactId) => {
    setSelectedContactId(contactId);
  };

  const handleClosePopup = () => {
    setSelectedContactId(null);
  };

  const handleUpdateContact = (updatedContact) => {
    // Update the contact in your list
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact,
      ),
    );
  };

  useEffect(() => {
    const mockContacts = [
      {
        id: 1,
        name: "Ahmed Al-Maskari",
        email: "ahmed@example.com",
        phone: "+968 1234 5678",
        subject: "Project Inquiry",
        message:
          "I would like to inquire about your MEP services for our new building project in Muscat.",
        date: "2024-01-15",
        status: "new",
        company: "Oman Construction LLC",
      },
      {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah@engineering.com",
        phone: "+968 9876 5432",
        subject: "Technical Support",
        message:
          "Need assistance with ELV system configuration in our commercial complex.",
        date: "2024-01-14",
        status: "responded",
        company: "Modern Engineering Co.",
      },
      {
        id: 3,
        name: "Mohammed Al-Harthy",
        email: "mohammed@omanoil.com",
        phone: "+968 2468 1357",
        subject: "Lighting Design Consultation",
        message:
          "Looking for innovative lighting solutions for our new headquarters.",
        date: "2024-01-13",
        status: "pending",
        company: "Oman Oil & Gas",
      },
      {
        id: 4,
        name: "Fatima Al-Said",
        email: "fatima@hospital.om",
        phone: "+968 3698 7412",
        subject: "Emergency Services",
        message: "Urgent MEP maintenance required for our hospital facility.",
        date: "2024-01-12",
        status: "new",
        company: "Royal Hospital",
      },
      {
        id: 5,
        name: "David Wilson",
        email: "david@international.com",
        phone: "+968 8520 9630",
        subject: "Partnership Proposal",
        message:
          "Interested in discussing potential partnership opportunities.",
        date: "2024-01-11",
        status: "responded",
        company: "International Engineering Group",
      },
    ];

    setContacts(mockContacts);
    setFilteredContacts(mockContacts);
    setLoading(false);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    let filtered = contacts;

    // Apply search filter
    if (term) {
      filtered = filtered.filter(
        (contact) =>
          contact.name.toLowerCase().includes(term) ||
          contact.email.toLowerCase().includes(term) ||
          contact.subject.toLowerCase().includes(term) ||
          contact.company.toLowerCase().includes(term),
      );
    }

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((contact) => contact.status === statusFilter);
    }

    // Apply sorting
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    setFilteredContacts(filtered);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    let filtered = contacts;

    if (status !== "all") {
      filtered = filtered.filter((contact) => contact.status === status);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchTerm) ||
          contact.email.toLowerCase().includes(searchTerm),
      );
    }

    setFilteredContacts(filtered);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
    const sorted = [...filteredContacts].sort((a, b) => {
      if (criteria === "date") {
        return new Date(b.date) - new Date(a.date);
      } else if (criteria === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
    setFilteredContacts(sorted);
  };

  const deleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      setContacts(contacts.filter((contact) => contact.id !== id));
      setFilteredContacts(
        filteredContacts.filter((contact) => contact.id !== id),
      );
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      new: { label: "New", class: "contact-badge-new" },
      pending: { label: "Pending", class: "contact-badge-pending" },
      responded: { label: "Responded", class: "contact-badge-responded" },
    };

    const config = statusConfig[status] || {
      label: status,
      class: "contact-badge-default",
    };

    return (
      <span className={`contact-status-badge ${config.class}`}>
        {config.label}
      </span>
    );
  };

  if (loading) {
    return <div className="loading">Loading contacts...</div>;
  }

  return (
    <div className="dashboard-layout">
      {" "}
      {/* Updated class name */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <main className="dashboard-main-content">
        <Header activeTab={activeTab} />

        <div className="contact-management">
          <div className="contact-page-header">
            <div className="contact-header-left">
              <h2>Contact Management</h2>
              <p>Manage all contact requests and inquiries</p>
            </div>
            {/* <div className="contact-header-right">
              <button className="contact-export-btn">Export CSV</button>
              <button className="contact-add-contact-btn">+ Add Contact</button>
            </div> */}
          </div>

          <div className="contact-controls-panel">
            <div className="contact-search-container">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                placeholder="Search contacts by name, email, or company..."
                value={searchTerm}
                onChange={handleSearch}
                className="contact-search-input"
              />
            </div>

            <div className="contact-filters-container">
              <div className="contact-filter-group">
                <FontAwesomeIcon icon={faFilter} />
                <select
                  value={statusFilter}
                  onChange={(e) => handleStatusFilter(e.target.value)}
                  className="contact-filter-select"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="pending">Pending</option>
                  <option value="responded">Responded</option>
                </select>
              </div>

              {/* <div className="filter-group">
                <FontAwesomeIcon icon={faSort} />
                <select
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value)}
                  className="contact-filter-select"
                >
                  <option value="date">Sort by Date</option>
                  <option value="name">Sort by Name</option>
                </select>
              </div> */}
            </div>
          </div>

          <div className="contacts-table-container">
            <table className="contacts-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Contact Info</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.length > 0 ? (
                  filteredContacts.map((contact) => (
                    <tr key={contact.id}>
                      <td>
                        <div className="contact-name">
                          <strong>{contact.name}</strong>
                        </div>
                      </td>
                      <td>{contact.company}</td>
                      <td>
                        <div className="contact-info">
                          <div className="contact-email">
                            <FontAwesomeIcon icon={faEnvelope} />
                            {contact.email}
                          </div>
                          <div className="contact-phone">
                            <FontAwesomeIcon icon={faPhone} />
                            {contact.phone}
                          </div>
                        </div>
                      </td>
                      <td>{contact.subject}</td>
                      <td>
                        <div className="contact-date">
                          <FontAwesomeIcon icon={faCalendar} />
                          {contact.date}
                        </div>
                      </td>
                      <td>{getStatusBadge(contact.status)}</td>
                      <td>
                        <div className="contact-action-buttons">
                          <button
                            className="action-btn view-btn"
                            onClick={() => handleContactClick(contact.id)}
                          >
                            <FontAwesomeIcon icon={faEye} />
                            <span>View</span>
                          </button>
                          {/* <button className="contact-action-btn contact-reply-btn">
                            <FontAwesomeIcon icon={faReply} />
                            <span>Reply</span>
                          </button> */}
                          <button
                            className="contact-action-btn contact-delete-btn"
                            onClick={() => deleteContact(contact.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                            <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="contact-no-data">
                      No contacts found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="contact-table-footer">
            <div className="contact-pagination-info">
              Showing {filteredContacts.length} of {contacts.length} contacts
            </div>
            <div className="contact-pagination-controls">
              <button className="contact-pagination-btn" disabled>
                Previous
              </button>
              <span className="contact-page-number">1</span>
              <button className="contact-pagination-btn">Next</button>
            </div>
          </div>
        </div>
      </main>
      {selectedContactId && (
        <ContactViewPopup
          contactId={selectedContactId}
          onClose={handleClosePopup}
          onUpdateContact={handleUpdateContact}
        />
      )}
    </div>
  );
};

export default ContactUs;
