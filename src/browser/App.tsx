import React, { useEffect, useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { AppContext } from "@/context/app";
import { AccountsContext } from "@/context/accounts";
import Startup from "./views/Startup";
import Comeback from "./views/Comeback";
import CreateWallet from "./views/CreateWallet";
import Mnemonic from "./views/Mnemonic";
import SelectedWallet from "./views/SelectedWallet";
import AddToken from "./views/AddToken";
const Main: React.FC = () => {
  const history = useHistory();
  const { dispatch } = useContext(AppContext);
  const { accounts } = useContext(AccountsContext);
  useEffect(() => {
    history.push("/walletlist");
    let account = accounts["TAO"][0];
    if (account) {
      dispatch({
        type: "SET_CURRENT_ACCOUNT",
        payload: { ...account },
      });
    }
  }, []);
  return (
    <Switch>
      <Route component={Startup} path="/startup" />
      <Route component={Comeback} path="/comeback" />
      <Route component={CreateWallet} path="/createwallet/:type" />
      <Route component={Mnemonic} path="/mnemonic/:type" />
      <Route component={SelectedWallet} path="/walletlist" />
      <Route component={AddToken} path="/addtoken" />
    </Switch>
  );
};
export default Main;
