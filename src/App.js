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

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  console.log(isUserLoggedIn);

  return (
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
      <Route path="/profile">
        <ProfilePage />
      </Route>
    </Switch>
  );
}

export default App;
