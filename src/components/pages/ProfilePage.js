import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProfilePage = () => {
  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        Welcome to the Mail
        <Link to="/mailbox">
          <Button>MailBox</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
