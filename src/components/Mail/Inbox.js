import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { MailAction } from "../../features/mailSlice/MailSlice";

const Inbox = (props) => {
  const items = useSelector((state) =>
    props.itis ? state.mail.itemsSentBox : state.mail.itemsInbox
  );

  const dispatch = useDispatch();

  const Email = localStorage.getItem("emialId");
  const idEmail = Email ? Email.replace(/[@.]/g, "") : null;

  const { deleteEmail } = useFetch();

  const updatingStatus = (el) => {
    let obj = {
      enteredEmail: el.senderEmail,
      enteredEmailBody: el.emailBody,
      enteredSubject: el.subject,
      id: el.id,
      isRead: true,
    };
    fetch(
      `https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}/inbox/${el.ckey}.json`,
      {
        method: "PUT",
        body: JSON.stringify(obj),
      }
    );
  };

  const onDeleteHandler = (ckey) => {
    if (props.itis) {
      deleteEmail(idEmail, ckey, "sentbox");
    } else {
      deleteEmail(idEmail, ckey, "inbox");
    }
  };

  const parse = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const content = doc.body.textContent;
    return content;
  };

  return (
    <div>
      <div className="container">
        <Row className="container">
          {props.itis && <Col md={4}>Sent Email</Col>}
          {!props.itis && <Col md={4}>Recived Inbox Email</Col>}

          <Col md={3}>Subject Line</Col>
          <Col>Email Body</Col>
        </Row>
        {items.map((item) => (
          <Row key={item.ckey}>
            <Col md={10}>
              <ListGroup>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/profile/${item.ckey}`}
                >
                  <ListGroup.Item
                    onClick={() => {
                      dispatch(MailAction.clickItem(item));
                      !props.itis && updatingStatus(item);
                    }}
                  >
                    <Row>
                      {!props.itis ? (!item.isRead ? "🟢" : "✔️") : null}
                      <Col md={5}>{item.senderEmail}</Col>
                      <Col md={3}>{item.subject}</Col>
                      <Col>{parse(item.emailBody)}</Col>
                    </Row>
                  </ListGroup.Item>
                </Link>
              </ListGroup>
            </Col>
            <Col>
              <Button
                variant="danger"
                onClick={() => {
                  onDeleteHandler(item.ckey);
                }}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
