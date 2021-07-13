import React, { useReducer } from "react";
interface Action {
  type: string;
  payload: WalletAccount;
}
function accountsReducer(
  state: WalletAccounts,
  action: Action
): WalletAccounts {
  switch (action.type) {
    case "ADD_ACCOUNT":
      return state;
    case "DELETE_ACCOUNT":
      return state;
    case "UPDATE_ACCOUNT":
      let { chain, address } = action.payload;
      let index = state[chain].findIndex(
        (account) => account.address === address
      );
      if (index !== -1) {
        state[chain][index] = action.payload;
      }
      return {
        ...state,
      };
    default:
      return state;
  }
}
const testAccounts = {
  ETH: [
    {
      chain: "ETH",
      accountName: "ETH-1",
      address: "0xda7fed1A23E322f13d5F7bB5b3d1a46E1428D82E",
      mnemonic: "",
      privateKey:
        "b5fd8674dfe310454154bb620ec09211c7e561448bf9d83881c0663f5c6a4924",
      tokens: [
        {
          tokenName: "ETH",
          balance: "680",
        },
        {
          tokenName: "USDT",
          contractAddress: "0xasd123asd123",
        },
        {
          tokenName: "ETH",
          balance: "680",
        },
        {
          tokenName: "ETH",
          balance: "680",
        },
        {
          tokenName: "USDT",
          contractAddress: "0xasd123asd123",
        },
      ],
    },
    {
      chain: "ETH",
      accountName: "ETH-2",
      address: "0xda7fed1A23E322f13d5F7bB5b3d1a46E1428D82F",
      mnemonic: "",
      privateKey:
        "b5fd8674dfe310454154bb620ec09211c7e561448bf9d83881c0663f5c6a4924",
      tokens: [
        {
          tokenName: "ETH",
          balance: "780",
        },
        {
          tokenName: "USDT",
          contractAddress: "0xx23asd",
        },
      ],
    },
  ],
  TAO: [
    {
      chain: "TAO",
      accountName: "TAO-1",
      address: "0xda7fed1A23E322f13d5F7bB5b3d1a46E1428D82E",
      mnemonic: "",
      privateKey:
        "b5fd8674dfe310454154bb620ec09211c7e561448bf9d83881c0663f5c6a4924",
      tokens: [
        {
          tokenName: "TAO",
          balance: "1234",
        },
      ],
    },
  ],
};
export const AccountsContext = React.createContext<{
  accounts: WalletAccounts;
  dispatch: React.Dispatch<Action>;
}>({
  accounts: {},
  dispatch: () => {},
});
export const AccountsContextProvider: React.FC = ({ children }) => {
  const [accounts, dispatch] = useReducer(accountsReducer, testAccounts);
  return (
    <AccountsContext.Provider
      value={{
        accounts,
        dispatch,
      }}
    >
      {children}
    </AccountsContext.Provider>
  );
};
