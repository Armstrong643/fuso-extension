import React, { useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Layout, BaseButton } from "@/components";
import { Icon, Icons } from "@/components/Icon";
import { AppContext } from "@/context/app";
import { shortenAddress } from "@/utils/util";
import "../styles/account.scss";
const Main: React.FC = () => {
  const {
    appState: { currentAccount },
  } = useContext(AppContext);
  const location = useLocation();
  const tokenIndex = useMemo(() => {
    const match = location.search.match(/index=(\d+)/);
    return match ? +match[1] : 0;
  }, [location]);
  const token = useMemo(() => {
    return currentAccount?.tokens[tokenIndex];
  }, [currentAccount, tokenIndex]);
  return (
    <Layout className="account-detail">
      {currentAccount && token ? (
        <>
          <img
            src={token.icon || `/img/coin/${currentAccount.chain}.svg`}
            alt=""
          />
          <h3>
            {token.balance || 0} {token.tokenName}
          </h3>
          <h4>$ 00</h4>
          <p>{shortenAddress(currentAccount.address)}</p>
          <div>
            <BaseButton>
              <Icon href={Icons.SendIcon.id} />
              发送
            </BaseButton>
            <BaseButton>
              <Icon href={Icons.ReceiveIcon.id} />
              收款
            </BaseButton>
          </div>
          <a href="#">查看更多记录&gt;</a>
        </>
      ) : null}
    </Layout>
  );
};
export default Main;
