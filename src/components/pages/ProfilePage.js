import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Mailbox from "./Mail/Mailbox";
import Inbox from "./Mail/Inbox";

const ProfilePage = () => {
  const [show, setShow] = useState(null);
  return (
    <div className="container">
      <div>Welcome to the Mail</div>
      <Button onClick={() => setShow("compose")}>Compose Mail</Button>
      <Button onClick={() => setShow("inbox")}>Inbox</Button>
      <hr></hr>
      {show === "compose" && <Mailbox />}
      {show === "inbox" && <Inbox />}
    </div>
  );
};

export default ProfilePage;
