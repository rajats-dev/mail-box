import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { mailAction } from "../../store/mail-Slice";

const Inbox = () => {
  const items = useSelector((state) => state.mail.items);
  const isRead = useSelector((state) => state.mail.isRead);
  const dispatch = useDispatch();

  const Email = localStorage.getItem("emialId");
  const idEmail = Email ? Email.replace(/[@.]/g, "") : null;

  console.log(items);

  const updatingStatus = (ckey) => {
    dispatch(mailAction.updateStatus(ckey));

    // fetch(
    //   `https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}.json`,
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(),
    //   }
    // );
  };

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
            <Link
              style={{ textDecoration: "none" }}
              to={`/profile/${item.ckey}`}
            >
              <ListGroup.Item
                onClick={() => {
                  updatingStatus(item.ckey);
                }}
              >
                <Row>
                  {!isRead && "*"}
                  <Col md={3}>{item.senderEmail}</Col>
                  <Col md={2}>{item.subject}</Col>
                  <Col>{item.emailBody}</Col>
                </Row>
              </ListGroup.Item>
            </Link>
          </ListGroup>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
