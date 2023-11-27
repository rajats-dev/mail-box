import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const API_KEY = process.env.REACT_APP_GOOGLE_API;

const ForgotPass = () => {
  const enteredEmail = useRef();
  const history = useHistory();

  const sendLink = (e) => {
    e.preventDefault();

    const sendEnteredEmail = enteredEmail.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: sendEnteredEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMess = "failed";
            if (data && data.error && data.error.message) {
              errorMess = data.error.message;
            }
            throw new Error(errorMess);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    setTimeout(() => {
      history.replace("/auth");
    }, 5000);
  };

  return (
    <div>
      <Form className="container" onSubmit={sendLink}>
        <h2>Forgot Password</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter the Registered Email</Form.Label>
          <Form.Control type="email" ref={enteredEmail} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Link
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPass;
