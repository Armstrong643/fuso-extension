import React, { useReducer } from "react";
import { AccountsContextProvider } from "./accounts";
import extension from "@/utils/chrome";

interface WalletState {
  mnemonic: string;
  password: string;
  currentAccount: WalletAccount | null;
}
interface AppAction {
  type: string;
  payload?: any;
}
interface AppState {
  appState: WalletState;
  dispatch: React.Dispatch<AppAction>;
}
const initialState: WalletState = {
  mnemonic: "",
  password: "pwd",
  currentAccount: null,
};
function appReducer(state: WalletState, action: AppAction): WalletState {
  const { type, payload } = action;
  switch (type) {
    case "SET_MNEMONIC":
      return {
        ...state,
        mnemonic: payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: payload,
      };
    case "SET_CURRENT_ACCOUNT":
      return {
        ...state,
        currentAccount: payload,
      };
    default:
      return state;
  }
}
export const AppContext = React.createContext<AppState>({
  appState: initialState,
  dispatch: () => {},
});
export const AppContextProvider: React.FC = (props) => {
  const [appState, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        appState,
        dispatch,
      }}
    >
      <AccountsContextProvider>{props.children}</AccountsContextProvider>
    </AppContext.Provider>
  );
};
