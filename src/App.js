import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Authform from "./components/Auth/Authform";
import ForgotPass from "./components/pages/ForgotPass";
import Home from "./components/pages/Home";
import { useSelector } from "react-redux";
import ProfilePage from "./components/pages/ProfilePage";
import Mailbox from "./components/pages/Mail/Mailbox";
import Inbox from "./components/pages/Mail/Inbox";
import Root from "./components/pages/Root";
import Reademail from "./components/pages/Mail/Reademail";

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  return (
    <Root>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth">
          {!isUserLoggedIn && <Authform />}
          {isUserLoggedIn && <Redirect to="/profile" />}
        </Route>
        <Route path="/forgotPass">
          <ForgotPass />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
        <Route path="/profile/:emailID">
          <Reademail />
        </Route>
      </Switch>
    </Root>
  );
}

export default App;
