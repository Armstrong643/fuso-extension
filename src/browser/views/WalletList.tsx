import React, { useState } from "react";
import { Icon, Address } from "@/components";
import { SettingIcon, ArrowDownIcon } from "@/components/Icon";

import "../styles/walletlist.scss";
const Main: React.FC = () => {
  const [selected, setSelected] = useState<string>("BTC");
  const [balance, setBalance] = useState<number | string>("180.00");
  return (
    <div className="wallet-list">
      <header className="base-header">
        <div className="selected">
          <span>{selected}</span>
          <Icon href={ArrowDownIcon.id} fill="#fff" />
        </div>
        <Icon href={SettingIcon.id} width={32} heihgt={32} />
      </header>
      <main>
        <div className="card">
          <span>我的资产($)</span>
          <h3>{balance}</h3>
          <Address
            text={"5ERFTzPYXJ82MrfKfUitv8xdymC2SacWTrUpiVtBnDYkWNGj"}
            showCopy={true}
          />
        </div>
        <ul>
          <li></li>
        </ul>
      </main>
    </div>
  );
};
export default Main;
