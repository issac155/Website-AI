// ContactUs.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrash,
  faPhone,
  faEnvelope,
  faCalendar,
  faFilter,
  faSearch,
  faExclamationTriangle,
  faSpinner,
  faCheckCircle,
  faClock,
  faExchangeAlt, // Added for status change
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../style/ContactUs.css";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import ContactViewPopup from "./ContactView";
import {
  deleteContact,
  getContact,
  updateContactStatus,
} from "../../services/contactservice"; // Added updateContactStatus

const ContactUs = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalContacts, setTotalContacts] = useState(0);
  const [searchParams, setSearchParams] = useState({
    sRead: "",
    search: "",
    page: 1,
    limit: 10,
  });

  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedContact, setSelectedContact] = useState(null);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [deletingContactId, setDeletingContactId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [updatingContactId, setUpdatingContactId] = useState(null); // New state for tracking status update

  // Fetch contacts from API
  const fetchContacts = async (params = {}) => {
    try {
      setLoading(true);
      const credentials = {
        sRead: params.sRead || "",
        search: params.search || "",
        page: params.page || 1,
        limit: params.limit || 10,
      };

      const response = await getContact(credentials);

      if (response && response.data) {
        setContacts(response.data);
        setFilteredContacts(response.data);
        setTotalContacts(response.total || response.data.length);
        setTotalPages(response.pages || 1);

        setSearchParams((prev) => ({
          ...prev,
          page: response.page || 1,
        }));
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchContacts(searchParams);
  }, []);

  // Handle search with API call
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    fetchContacts({
      ...searchParams,
      search: term,
      page: 1,
    });
  };

  // Status filter handler
  const handleStatusFilter = (status) => {
    setStatusFilter(status);

    if (status !== "all") {
      const params = {
        ...searchParams,
        sRead: status,
        page: 1,
      };
      fetchContacts(params);
    } else {
      const params = { ...searchParams, sRead: "", page: 1 };
      fetchContacts(params);
    }
  };

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

  // Toggle contact status (Pending ↔ Responded)
  const handleToggleStatus = async (contact) => {
    const contactId = contact.id || contact._id;
    const currentStatus = parseInt(contact.isRead) || 0;
    const newStatus = currentStatus === 0 ? 1 : 0;

    // Set updating state
    setUpdatingContactId(contactId);

    try {
      // Call API to update status
      const response = await updateContactStatus(contactId, {
        isRead: newStatus,
      });

      if (response && response.success) {
        // Update local state
        const updatedContact = { ...contact, isRead: newStatus };

        setContacts(
          contacts.map((c) =>
            (c.id || c._id) === contactId ? updatedContact : c,
          ),
        );

        setFilteredContacts(
          filteredContacts.map((c) =>
            (c.id || c._id) === contactId ? updatedContact : c,
          ),
        );

        // If viewing the contact in popup, update it
        if (
          selectedContact &&
          (selectedContact.id || selectedContact._id) === contactId
        ) {
          setSelectedContact(updatedContact);
        }

        console.log(
          `Status updated to ${newStatus === 0 ? "Pending" : "Responded"}`,
        );
      } else {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating contact status:", error);
      alert("Failed to update contact status");
    } finally {
      // Reset updating state
      setUpdatingContactId(null);
    }
  };

  // Client-side sorting
  const handleSort = (criteria) => {
    setSortBy(criteria);

    let sorted = [...filteredContacts];
    if (criteria === "date") {
      sorted.sort(
        (a, b) =>
          new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date),
      );
    } else if (criteria === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredContacts(sorted);
  };

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      const params = { ...searchParams, page: nextPage };
      fetchContacts(params);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      const params = { ...searchParams, page: prevPage };
      fetchContacts(params);
    }
  };

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleClosePopup = () => {
    setSelectedContact(null);
  };

  const handleUpdateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact,
      ),
    );
    setFilteredContacts(
      filteredContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact,
      ),
    );
  };

  // Show delete confirmation popup
  const showDeleteConfirmation = (contact) => {
    setContactToDelete(contact);
  };

  // Handle delete confirmation
  const confirmDelete = async () => {
    if (!contactToDelete) return;

    const contactId = contactToDelete.id || contactToDelete._id;

    // Set deleting states
    setIsDeleting(true);
    setDeletingContactId(contactId);

    try {
      const response = await deleteContact(contactId);

      // Update local state
      setContacts(
        contacts.filter((contact) => (contact.id || contact._id) !== contactId),
      );
      setFilteredContacts(
        filteredContacts.filter(
          (contact) => (contact.id || contact._id) !== contactId,
        ),
      );

      console.log("Contact deleted successfully");
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Failed to delete contact");
    } finally {
      // Reset deleting states
      setIsDeleting(false);
      setDeletingContactId(null);
      setContactToDelete(null);
    }
  };

  // Cancel delete operation
  const cancelDelete = () => {
    setContactToDelete(null);
  };

  const getStatusBadge = (status) => {
    const statusString = status.toString();

    const statusConfig = {
      0: { label: "Pending", class: "contact-badge-pending", icon: faClock },
      1: {
        label: "Responded",
        class: "contact-badge-responded",
        icon: faCheckCircle,
      },
    };

    const config = statusConfig[statusString] || {
      label: "Unknown",
      class: "contact-badge-default",
      icon: faExclamationTriangle,
    };

    return (
      <span className={`contact-status-badge ${config.class}`}>
        <FontAwesomeIcon icon={config.icon} style={{ marginRight: "5px" }} />
        {config.label}
      </span>
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

        <div className="contact-management">
          <div className="contact-page-header">
            <div className="contact-header-left">
              <h2>Contact Management</h2>
              <p>Manage all contact requests and inquiries</p>
            </div>
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
                  <option value="0">Pending</option>
                  <option value="1">Responded</option>
                </select>
              </div>
            </div>
          </div>

          {loading && contacts.length === 0 ? (
            <div className="loading">Loading contacts...</div>
          ) : (
            <>
              <div className="contacts-table-container">
                <table className="contacts-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Contact Info</th>
                      <th>Service</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredContacts.length > 0 ? (
                      filteredContacts.map((contact) => {
                        const contactId = contact.id || contact._id;
                        const isDeletingThis = deletingContactId === contactId;
                        const isUpdatingThis = updatingContactId === contactId;
                        const isPending = parseInt(contact.isRead) === 0;

                        return (
                          <tr key={contactId}>
                            <td>
                              <div className="contact-name">
                                <strong>{contact.name}</strong>
                                {contact.company && (
                                  <div className="contact-company">
                                    {contact.company}
                                  </div>
                                )}
                              </div>
                            </td>
                            <td>
                              <div className="contact-info">
                                <div className="contact-email">
                                  <FontAwesomeIcon icon={faEnvelope} />
                                  {contact.email}
                                </div>
                                <div className="contact-phone">
                                  <FontAwesomeIcon icon={faPhone} />
                                  {contact.phone ||
                                    contact.phoneNumber ||
                                    "N/A"}
                                </div>
                              </div>
                            </td>
                            <td>{contact.service || "No Service"}</td>
                            <td>
                              <div className="contact-date">
                                <FontAwesomeIcon icon={faCalendar} />
                                {formatDate(contact.created_at)}
                              </div>
                            </td>
                            <td>
                              <div className="contact-status-cell">
                                {getStatusBadge(contact.isRead)}
                                <button
                                  className="contact-status-toggle-btn"
                                  onClick={() => handleToggleStatus(contact)}
                                  disabled={isDeleting || isUpdatingThis}
                                  title={`Mark as ${isPending ? "Responded" : "Pending"}`}
                                >
                                  {isUpdatingThis ? (
                                    <FontAwesomeIcon
                                      icon={faSpinner}
                                      className="contact-fa-spin"
                                    />
                                  ) : (
                                    <FontAwesomeIcon icon={faExchangeAlt} />
                                  )}
                                </button>
                              </div>
                            </td>
                            <td>
                              <div className="contact-action-buttons">
                                <button
                                  className="contact-action-btn contact-view-btn"
                                  onClick={() => handleContactClick(contact)}
                                  disabled={isDeleting || isUpdatingThis}
                                >
                                  <FontAwesomeIcon icon={faEye} />
                                  <span>View</span>
                                </button>
                                <button
                                  className="contact-action-btn contact-delete-btn"
                                  onClick={() =>
                                    showDeleteConfirmation(contact)
                                  }
                                  disabled={
                                    isDeleting ||
                                    isDeletingThis ||
                                    isUpdatingThis
                                  }
                                >
                                  {isDeletingThis ? (
                                    <>
                                      <FontAwesomeIcon
                                        icon={faSpinner}
                                        className="fa-spin"
                                      />
                                      <span>Deleting...</span>
                                    </>
                                  ) : (
                                    <>
                                      <FontAwesomeIcon icon={faTrash} />
                                      <span>Delete</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
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
                  Showing {filteredContacts.length} of {totalContacts} contacts
                  {searchParams.page > 1 &&
                    ` (Page ${searchParams.page} of ${totalPages})`}
                </div>
                <div className="contact-pagination-controls">
                  <button
                    className="contact-pagination-btn"
                    onClick={handlePrevPage}
                    disabled={currentPage <= 1 || isDeleting}
                  >
                    Previous
                  </button>
                  <span className="contact-page-number">{currentPage}</span>
                  <button
                    className="contact-pagination-btn"
                    onClick={handleNextPage}
                    disabled={currentPage >= totalPages || isDeleting}
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Contact View Popup */}
      {selectedContact && (
        <ContactViewPopup
          contact={selectedContact}
          onClose={handleClosePopup}
          onUpdateContact={handleUpdateContact}
          onToggleStatus={() => handleToggleStatus(selectedContact)} // Pass toggle function to popup
        />
      )}

      {/* Delete Confirmation Popup */}
      {contactToDelete && (
        <div className="contact-confirmation-popup-overlay">
          <div className="contact-confirmation-popup">
            <div className="contact-confirmation-popup-header">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="contact-confirmation-warning-icon"
              />
              <h3>Delete Contact</h3>
            </div>

            <div className="contact-confirmation-popup-content">
              <p>Are you sure you want to delete the contact for:</p>
              <div className="contact-confirmation-contact-details">
                <p>
                  <strong>Name:</strong> {contactToDelete.name}
                </p>
                <p>
                  <strong>Email:</strong> {contactToDelete.email}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {formatDate(contactToDelete.created_at)}
                </p>
              </div>
              <p className="contact-confirmation-warning-text">
                This action cannot be undone. All contact information will be
                permanently deleted.
              </p>
            </div>

            <div className="contact-confirmation-popup-actions">
              <button
                className="contact-confirmation-btn contact-confirmation-cancel-btn"
                onClick={cancelDelete}
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                className="contact-confirmation-btn contact-confirmation-delete-btn"
                onClick={confirmDelete}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <>
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="fa-spin"
                      style={{ marginRight: "8px" }}
                    />
                    Deleting...
                  </>
                ) : (
                  "Delete Contact"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
