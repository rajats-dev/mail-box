import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useFetch } from "../useFetch";

const Inbox = () => {
  const items = useSelector((state) => state.mail.items);
  const isRead = useSelector((state) => state.mail.isRead);

  const Email = localStorage.getItem("emialId");
  const idEmail = Email ? Email.replace(/[@.]/g, "") : null;

  const { deleteEmail } = useFetch();

  const updatingStatus = (ckey) => {
    // dispatch(mailAction.updateStatus(ckey));
    // let existingItem = items.find((item) => item.ckey === ckey);
    // let updateItem = { ...existingItem, isRead: true };
    // // let itemsAfter = items.filter((item) => item.ckey !== existingItem.ckey);
    // // let load = [...itemsAfter, { ...existingItem, isRead: true }];
    // console.log(updateItem);
    // fetch(
    //   `https://mail-box-fb2fe-default-rtdb.firebaseio.com/${idEmail}/${ckey}.json`,
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(updateItem),
    //   }
    // );
  };

  const onDeleteHandler = (ckey) => {
    deleteEmail(idEmail, ckey);
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
              </ListGroup.Item>
            </Link>
          </ListGroup>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
