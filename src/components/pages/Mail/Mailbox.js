import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Mailbox = () => {
  const emailInptRef = useRef();
  const subjectInputRef = useRef();
  const [emailBody, setEmailBody] = useState("");

  const handleChange = (newText) => {
    setEmailBody(newText);
  };

  console.log(emailBody);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInptRef.current.value;
    const enteredSubject = subjectInputRef.current.value;

    const idEmail = enteredEmail.replace(/[@.]/g, "");

    let obj = {
      enteredEmail: enteredEmail,
      enteredSubject: enteredSubject,
      enteredEmailBody: emailBody,
      id: Math.random().toString(),
    };

    fetch(
      `https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}.json`,
      {
        method: "POST",
        body: JSON.stringify(obj),
      }
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        return error;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
