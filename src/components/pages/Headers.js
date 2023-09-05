import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { authAction } from "../store/auth-Slice";

const Headers = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            Mail-box
          </Navbar.Brand>
          {!isUserLoggedIn && (
            <Link to="/auth">
              <Button>Login</Button>
            </Link>
          )}
          {isUserLoggedIn && (
            <Link to="/auth">
              <Button
                onClick={() => {
                  dispatch(authAction.logout());
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
