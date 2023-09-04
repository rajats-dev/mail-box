import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Mailbox from "./Mail/Mailbox";
import Inbox from "./Mail/Inbox";
import { useDispatch, useSelector } from "react-redux";
import { mailAction } from "../store/mail-Slice";
import Sentbox from "./Mail/Sentbox";

const ProfilePage = () => {
  const [show, setShow] = useState(null);
  const dispatch = useDispatch();

  const Email = localStorage.getItem("emialId");
  const idEmail = Email ? Email.replace(/[@.]/g, "") : null;

  useEffect(() => {
    setInterval(() => {
      fetch(
        `https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}.json`
      )
        .then((res) => {
          return res.json();
        })
        .catch((error) => {
          return error;
        })
        .then((data) => {
          let loadData = [];
          for (const key in data) {
            loadData.push({
              ckey: key,
              emailBody: data[key].enteredEmailBody,
              subject: data[key].enteredSubject,
              senderEmail: data[key].enteredEmail,
              isRead: data[key].isRead,
            });
          }
          console.log(loadData);

          dispatch(mailAction.mailData(loadData));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 5000);
    return () => clearInterval();
  }, [dispatch]);

  return (
    <div className="container">
      <div>Welcome to the Mail</div>
      <Button onClick={() => setShow("compose")}>Compose Mail</Button>
      <Button onClick={() => setShow("inbox")}>Inbox</Button>
      <Button onClick={() => setShow("sentBox")}>Sentbox</Button>
      <hr></hr>
      {show === "compose" && <Mailbox />}
      {show === "inbox" && <Inbox />}
      {show === "sentBox" && <Sentbox />}
    </div>
  );
};

export default ProfilePage;
