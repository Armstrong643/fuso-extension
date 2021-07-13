import React, { useState, useContext, useEffect } from "react";
import { AccountsContext } from "@/context/accounts";
import { AppContext } from "@/context/app";
import { AccountCard } from "./AccountCard";
import classnames from "classnames";
import wallets from "@/utils/chain";
interface Props {
  onChange?: (account: WalletAccount) => void;
}
export const WalletList: React.FC<Props> = ({ onChange }) => {
  const { accounts } = useContext(AccountsContext);
  const { appState } = useContext(AppContext);
  const [selected, setSelected] = useState<string>("ETH");
  const handleChainClick = (chain: Chain) => {
    setSelected(chain.name);
  };
  const handleCardClick = (account: WalletAccount) => {
    onChange && onChange(account);
  };
  useEffect(() => {
    if (appState.currentAccount) {
      setSelected(appState.currentAccount.chain);
    }
  }, [appState.currentAccount]);
  return (
    <div className="wallet-list">
      <div className="left">
        {wallets.map((wallet) => {
          return (
            <div
              onClick={() => handleChainClick(wallet)}
              key={wallet.name}
              className={classnames({
                selected: wallet.name === selected,
              })}
            >
              <img src={wallet.icon} alt="" />
              <span></span>
            </div>
          );
        })}
      </div>
      <div className="right">
        <h4>{selected}</h4>
        {accounts[selected] &&
          accounts[selected].map((account) => {
            return (
              <AccountCard
                account={account}
                key={account.address}
                handleClick={handleCardClick}
              />
            );
          })}
      </div>
    </div>
  );
};
