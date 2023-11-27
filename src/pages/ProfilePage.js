import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import Mailbox from "../components/Mail/Mailbox";
import Inbox from "../components/Mail/Inbox";
import { useSelector } from "react-redux";
import Sentbox from "../components/Mail/Sentbox";
import useFetchEmail from "../hooks/useFetchEmail";

const ProfilePage = () => {
  const [show, setShow] = useState(null);
  const someChange = useSelector((state) => state.mail.someChange);
  const totalunReadMess = useSelector((state) => state.mail.unReadMess);

  const Email = localStorage.getItem("emialId");
  const idEmail = Email ? Email.replace(/[@.]/g, "") : null;

  useFetchEmail(
    `https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}/inbox.json`,
    someChange,
    "inbox"
  );

  useFetchEmail(
    `https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}/sentbox.json`,
    someChange,
    "sentbox"
  );

  return (
    <div className="container">
      <div style={{ margin: "6px", fontWeight: "bold" }}>
        Welcome To The Mail..
      </div>
      <Button onClick={() => setShow("compose")}>Compose Mail</Button>
      <Button onClick={() => setShow("inbox")}>Inbox</Button>
      <Button onClick={() => setShow("sentBox")}>Sentbox</Button>
      {show === "inbox" && <Badge>{totalunReadMess} new</Badge>}
      <hr></hr>
      {show === "compose" && <Mailbox />}
      {show === "inbox" && <Inbox />}
      {show === "sentBox" && <Sentbox />}
    </div>
  );
};

export default ProfilePage;
