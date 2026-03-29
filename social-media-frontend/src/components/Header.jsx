import React, { useState, useEffect, useRef } from "react";
import AddPost from "./AddPost";
import "./Header.css";

const Header = ({ onAddPost }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleAddPost = () => {
    setShowDropdown(false);
    setShowAddPost(true);
  };

  const handlePostSubmit = (post) => {
    onAddPost(post);
    setShowAddPost(false);
  };

  const toggleProfileDetails = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  // ✅ Effect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setShowProfileDetails(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">Instant Chat</div>
        <div className="profile" ref={dropdownRef}>
          <div onClick={toggleDropdown}>👤 Nani ▾</div>
          {showDropdown && (
            <div className="dropdown">
              <div onClick={toggleProfileDetails}>
                Profile {showProfileDetails ? "▲" : "▼"}
              </div>
              {showProfileDetails && (
                <div className="sub-dropdown">
                  <div>Email: nani@gmail.com</div>
                  <div>Password: Sravanth</div>
                </div>
              )}
              <div onClick={toggleAddPost}>Add Post</div>
              <div>Settings</div>
              <div>Logout</div>
            </div>
          )}
        </div>
      </header>

      {showAddPost && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="close-btn"
              onClick={() => setShowAddPost(false)}
            >
              ✖
            </button>
            <AddPost onAdd={handlePostSubmit} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
