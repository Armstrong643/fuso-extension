import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Layout, AccountCard } from "@/components";
import { AccountsContext } from "@/context/accounts";
import { Icon, Icons } from "@/components/Icon";
import { getAccount } from "@/utils/util";
import "../styles/walletdetail.scss";
const Main: React.FC = () => {
  const location = useLocation<WalletAccount>();
  const { accounts } = useContext(AccountsContext);
  const account = getAccount(location.state, accounts);
  return (
    <Layout className="wallet-detail" title={"钱包详情"}>
      {account ? <AccountCard account={account} showIcon={true} /> : null}
      <div className="split"></div>
      <ul className="menu">
        <li>
          <span>显示助记词</span>
          <Icon href={Icons.ArrowRightIcon.id} heihgt={16} width={16} />
        </li>
        <li>
          <span>导出私钥</span>{" "}
          <Icon href={Icons.ArrowRightIcon.id} heihgt={16} width={16} />
        </li>
      </ul>
    </Layout>
  );
};
export default Main;
