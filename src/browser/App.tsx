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
import Mnemonic from "./views/Mnemonic";
import WalletList from "./views/WalletList";
import { AppContextProvider } from "@/context/mnemonic";
const Main: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/walletlist");
  }, []);
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route component={Startup} path="/startup" />
          <Route component={Comeback} path="/comeback" />
          <Route component={CreateWallet} path="/createwallet/:type" />
          <Route component={Mnemonic} path="/mnemonic/:type" />
          <Route component={WalletList} path="/walletlist" />
        </Switch>
      </Router>
    </AppContextProvider>
  );
};
export default Main;
