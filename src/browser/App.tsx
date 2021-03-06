import React, { useEffect, useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { AppContext } from "@/context/app";
import { AccountsContext } from "@/context/accounts";
import Startup from "./views/Startup";
import Comeback from "./views/Comeback";
import CreateWallet from "./views/CreateWallet";
import Mnemonic from "./views/Mnemonic";
import Accounts from "./views/Accounts";
import AddToken from "./views/AddToken";
import AccountDetail from "./views/AccountDetail";
import Send from "./views/Send";
import Receive from "./views/Receive";
import WalletManage from "./views/WalletManage";
import WalletDetail from "./views/WalletDetail";
import ShowSecret from "./views/ShowSecret";
import AddressBook from "./views/AddressBook";
import AddAddress from "./views/AddAddress";
import EditAddress from "./views/EditAddres";
const App: React.FC = () => {
  const history = useHistory();
  const { dispatch } = useContext(AppContext);
  const { accounts } = useContext(AccountsContext);
  useEffect(() => {
    history.push("/comeback");
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
      <Route component={Accounts} path="/accounts" />
      <Route component={AddToken} path="/addtoken" />
      <Route component={AccountDetail} path="/account" />
      <Route component={Send} path="/send" />
      <Route component={Receive} path="/receive" />
      <Route component={WalletManage} path="/walletmanage" />
      <Route component={WalletDetail} path="/walletdetail" />
      <Route component={ShowSecret} path="/showsecret/:type" />
      <Route component={AddressBook} path="/addressbook" />
      <Route component={AddAddress} path="/addaddress" />
      <Route component={EditAddress} path="/editaddress" />
    </Switch>
  );
};
export default App;
