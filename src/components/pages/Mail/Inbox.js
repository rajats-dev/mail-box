import React, { useEffect } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { mailAction } from "../../store/mail-Slice";

const Email = localStorage.getItem("emialId");
const idEmail = Email.replace(/[@.]/g, "");

const Inbox = () => {
  const items = useSelector((state) => state.mail.items);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}.json`)
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        return error;
      })
      .then((data) => {
        // console.log(data);
        let loadData = [];
        for (const key in data) {
          loadData.push({
            ckey: key,
            emailBody: data[key].enteredEmailBody,
            subject: data[key].enteredSubject,
            senderEmail: data[key].enteredEmail,
          });
        }
        dispatch(mailAction.mailData(loadData));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dispatch]);

  console.log(items);

  return (
    <div>
      <div className="container">
        <Row className="container">
          <Col md={3}>Sender Email</Col>
          <Col md={2}>Subject Line</Col>
          <Col>Email Body</Col>
        </Row>
        {items.map((item) => (
          <ListGroup key={item.ckey}>
            <ListGroup.Item>
              <Row>
                <Col md={3}>{item.senderEmail}</Col>
                <Col md={2}>{item.subject}</Col>
                <Col>{item.emailBody}</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
