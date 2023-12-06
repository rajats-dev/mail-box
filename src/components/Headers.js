import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { AuthAction } from "../features/authSlice/AuthSlice";

const Headers = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "30px",
            }}
          >
            MailBox
          </Link>
          {!isUserLoggedIn && (
            <Link to="/auth">
              <Button>Login</Button>
            </Link>
          )}
          {isUserLoggedIn && (
            <Link to="/auth">
              <Button
                onClick={() => {
                  dispatch(AuthAction.logout());
                  localStorage.removeItem("emialId");
                  localStorage.removeItem("token");
                }}
              >
                Logout
              </Button>
            </Link>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Headers;
