import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import Mailbox from "./Mail/Mailbox";
import Inbox from "./Mail/Inbox";
import { useSelector } from "react-redux";
import Sentbox from "./Mail/Sentbox";
import useFetchEmail from "./useFetchEmail";

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

  // useEffect(() => {
  //   // setInterval(() => {
  //   fetch(
  //     `https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}/inbox.json`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .catch((error) => {
  //       return error;
  //     })
  //     .then((data) => {
  //       let loadData = [];
  //       for (const key in data) {
  //         loadData.push({
  //           ckey: key,
  //           emailBody: data[key].enteredEmailBody,
  //           subject: data[key].enteredSubject,
  //           senderEmail: data[key].enteredEmail,
  //           isRead: data[key].isRead,
  //         });
  //       }
  //       console.log(loadData);

  //       dispatch(mailAction.mailData(loadData));
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  //   // }, 5000);
  //   // return () => clearInterval();
  // }, [dispatch, idEmail, someChange]);

  return (
    <div className="container">
      <div>Welcome to the Mail</div>
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
