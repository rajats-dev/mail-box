import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Authform from "./components/Auth/Authform";
import ForgotPass from "./components/pages/ForgotPass";
import Home from "./components/pages/Home";
import { useSelector } from "react-redux";

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/auth">{!isUserLoggedIn && <Authform />}</Route>
      <Route path="/forgotPass">
        <ForgotPass />
      </Route>
    </Switch>
  );
}

export default App;
