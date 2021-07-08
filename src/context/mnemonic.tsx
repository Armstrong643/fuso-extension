import React, { useState } from "react";
import { mnemonicGenerate, mnemonicValidate } from "@polkadot/util-crypto";
interface IAppState {
  mnemonic: string;
  setMnemonic: (mnemonic: string) => void;
}
const initialState: IAppState = {
  mnemonic: "",
  setMnemonic: () => {},
};
export const AppContext = React.createContext<IAppState>(initialState);
export const AppContextProvider: React.FC = (props) => {
  const [mnemonic, setMnemonic] = useState<string>("");
  return (
    <AppContext.Provider
      value={{
        mnemonic,
        setMnemonic,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
