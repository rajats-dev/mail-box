import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
          padding: "7px",
          width: "60rem",
          borderRadius: "15px",
          backgroundColor: "black",
          color: "White",
        }}
      >
        Welcome To The Mail Box....
      </h3>
      <Link to="/profile" style={{ textDecoration: "none" }}>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
            padding: "15px",
            width: "10rem",
            borderRadius: "15px",
            backgroundColor: "black",
            color: "White",
          }}
        >
          Go To Your Profile
        </Button>
      </Link>
    </div>
  );
};

export default Home;
