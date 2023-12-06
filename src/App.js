import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import AuthForm from "./auth/AuthForm";
import ForgotPass from "./components/ForgotPass";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import ProfilePage from "./pages/ProfilePage";
import Root from "./components/Root";
import ReadMail from "./components/Mail/ReadMail";

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  return (
    <Root>
      <Switch>
        <Route path="/" exact>
          {!isUserLoggedIn && <AuthForm />}
          {isUserLoggedIn && <Redirect to="/home" />}
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/auth">
          {!isUserLoggedIn && <AuthForm />}
          {isUserLoggedIn && <Redirect to="/home" />}
        </Route>
        <Route path="/forgotPass">
          <ForgotPass />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
        <Route path="/profile/:emailID">
          <ReadMail />
        </Route>
      </Switch>
    </Root>
  );
}

export default App;
