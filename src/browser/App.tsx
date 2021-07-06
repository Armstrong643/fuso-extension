import React, { useEffect } from "react";
import {
  Switch,
  Route,
  HashRouter as Router,
  useHistory,
} from "react-router-dom";
import Startup from "./views/Startup";
import Comeback from "./views/Comeback";
import CreateWallet from "./views/CreateWallet";
const Main: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/comeback");
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route component={Startup} path="/startup" />
          <Route component={Comeback} path="/comeback" />
          <Route component={CreateWallet} path="/createwallet/:type" />
        </Switch>
      </Router>
    </>
  );
};
export default Main;
