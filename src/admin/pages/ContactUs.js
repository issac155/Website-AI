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
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../style/ContactUs.css";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import ContactViewPopup from "./ContactView";
import {
  deleteContact,
  getContact,
  updateContactStatus,
} from "../../services/contactservice";

const ContactUs = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalContacts, setTotalContacts] = useState(0); // Uncomment this
  const [searchParams, setSearchParams] = useState({
    sRead: "",
    search: "",
    page: 1,
    limit: 10,
  });

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedContact, setSelectedContact] = useState(null);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [deletingContactId, setDeletingContactId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [updatingContactId, setUpdatingContactId] = useState(null);

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
        setTotalContacts(response.pagination.total || response.data.length);
        setTotalPages(response.pagination.total_pages || 1);

        // FIXED: Use response.pagination.page instead of response.pagination.total_pages
        const pageNum = response.pagination.page || params.page || 1;
        setCurrentPage(pageNum);
        setSearchParams((prev) => ({
          ...prev,
          page: pageNum,
          search: params.search !== undefined ? params.search : prev.search,
          sRead: params.sRead !== undefined ? params.sRead : prev.sRead,
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
      page: 1, // Reset to first page when searching
    });
  };

  // Status filter handler
  const handleStatusFilter = (status) => {
    setStatusFilter(status);

    if (status !== "all") {
      const params = {
        ...searchParams,
        sRead: status,
        page: 1, // Reset to first page when filtering
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

  // Toggle contact status
  const handleToggleStatus = async (contact) => {
    const contactId = contact.id || contact._id;
    const currentStatus = parseInt(contact.isRead) || 0;
    const newStatus = currentStatus === 0 ? 1 : 0;

    setUpdatingContactId(contactId);

    try {
      const data = { isRead: newStatus };

      const response = await updateContactStatus(contactId, data);

      if (response && response.status === 200 && response.data) {
        const updatedContact = {
          ...contact,
          isRead: response.data.isRead,
          id: response.data.id || contactId,
        };

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

        if (
          selectedContact &&
          (selectedContact.id || selectedContact._id) === contactId
        ) {
          setSelectedContact(updatedContact);
        }

        console.log(
          `Status updated to ${response.data.isRead === 0 ? "Pending" : "Responded"}`,
        );
      } else {
        const fallbackUpdatedContact = { ...contact, isRead: newStatus };

        setContacts(
          contacts.map((c) =>
            (c.id || c._id) === contactId ? fallbackUpdatedContact : c,
          ),
        );

        setFilteredContacts(
          filteredContacts.map((c) =>
            (c.id || c._id) === contactId ? fallbackUpdatedContact : c,
          ),
        );

        if (
          selectedContact &&
          (selectedContact.id || selectedContact._id) === contactId
        ) {
          setSelectedContact(fallbackUpdatedContact);
        }

        console.log(
          `Status updated to ${newStatus === 0 ? "Pending" : "Responded"}`,
        );
      }
    } catch (error) {
      console.error("Error updating contact status:", error);
      alert("Failed to update contact status. Please try again.");
    } finally {
      setUpdatingContactId(null);
    }
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

  // Go to specific page
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      const params = { ...searchParams, page: page };
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
    const updatedContactId = updatedContact.id || updatedContact._id;

    setContacts(
      contacts.map((contact) => {
        const contactId = contact.id || contact._id;
        return contactId === updatedContactId ? updatedContact : contact;
      }),
    );

    setFilteredContacts(
      filteredContacts.map((contact) => {
        const contactId = contact.id || contact._id;
        return contactId === updatedContactId ? updatedContact : contact;
      }),
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

    setIsDeleting(true);
    setDeletingContactId(contactId);

    try {
      await deleteContact(contactId);

      // After deletion, check if current page becomes empty
      const remainingContacts = contacts.filter(
        (contact) => (contact.id || contact._id) !== contactId,
      );

      setContacts(remainingContacts);
      setFilteredContacts(
        filteredContacts.filter(
          (contact) => (contact.id || contact._id) !== contactId,
        ),
      );

      // If page becomes empty and not on first page, go back one page
      if (remainingContacts.length === 0 && currentPage > 1) {
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
        const params = { ...searchParams, page: prevPage };
        fetchContacts(params);
      }

      console.log("Contact deleted successfully");
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Failed to delete contact");
    } finally {
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

  // Loader Component
  const Loader = () => (
    <div className="contact-loader-container">
      <div className="contact-loader">
        <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
        <p>Loading contacts...</p>
      </div>
    </div>
  );

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

          {/* Show loader when loading */}
          {loading ? (
            <Loader />
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
                  {/* <span>
                    Showing {filteredContacts.length} of {totalContacts}{" "}
                    contacts
                    {totalPages > 1 &&
                      ` (Page ${currentPage} of ${totalPages})`}
                  </span> */}
                </div>
                <div className="contact-pagination-controls">
                  <button
                    className="contact-pagination-btn"
                    onClick={handlePrevPage}
                    disabled={currentPage <= 1 || isDeleting || loading}
                  >
                    Previous
                  </button>

                  {/* Optional: Add page numbers for better navigation */}
                  {totalPages > 1 && (
                    <div className="contact-page-numbers">
                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(
                          (page) =>
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 &&
                              page <= currentPage + 1),
                        )
                        .map((page, index, array) => (
                          <React.Fragment key={page}>
                            {index > 0 && array[index - 1] !== page - 1 && (
                              <span className="contact-page-dots">...</span>
                            )}
                            <button
                              className={`contact-page-number ${currentPage === page ? "contact-page-active" : ""}`}
                              onClick={() => handlePageChange(page)}
                              disabled={isDeleting || loading}
                            >
                              {page}
                            </button>
                          </React.Fragment>
                        ))}
                    </div>
                  )}

                  <button
                    className="contact-pagination-btn"
                    onClick={handleNextPage}
                    disabled={
                      currentPage >= totalPages || isDeleting || loading
                    }
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
          onToggleStatus={() => handleToggleStatus(selectedContact)}
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
