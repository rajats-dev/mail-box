import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFetch } from "../useFetch";

const Mailbox = () => {
  const emailInptRef = useRef();
  const subjectInputRef = useRef();
  const [emailBody, setEmailBody] = useState("");

  const { sendEmail, allEmail } = useFetch();

  const handleChange = (newText) => {
    setEmailBody(newText);
  };

  // console.log(emailBody);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInptRef.current.value;
    const enteredSubject = subjectInputRef.current.value;
    const idEmail = enteredEmail.replace(/[@.]/g, "");
    const signInEmail = localStorage.getItem("emialId");
    const signInID = signInEmail.replace(/[@.]/g, "");

    let obj = {
      enteredEmail: enteredEmail,
      enteredSubject: enteredSubject,
      enteredEmailBody: emailBody,
      id: Math.random().toString(),
      isRead: false,
    };

    sendEmail(idEmail, obj);
    allEmail(signInID, obj);
  };

  return (
    <div className="container">
      <h2>Mail Box</h2>
      <Form onSubmit={onSubmitHandler}>
        <Form.Control
          type="email"
          id="recipient"
          placeholder="To: Enter email"
          ref={emailInptRef}
        />
        <Form.Control type="text" placeholder="Subject" ref={subjectInputRef} />
        <ReactQuill onChange={handleChange} />
        <Button type="submit">Send</Button>
      </Form>
    </div>
  );
};

export default Mailbox;
