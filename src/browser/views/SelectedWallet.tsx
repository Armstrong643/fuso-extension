import React, { useState, useContext, useMemo } from "react";
import { AppContext } from "@/context/app";
import { Icon, Address, WalletList, Drawer, BaseButton } from "@/components";
import { Icons } from "@/components/Icon";
import "../styles/selectedwallet.scss";
const Main: React.FC = () => {
  const [isShowAside, setIsShowAside] = useState<boolean>(false);
  const { appState, dispatch } = useContext(AppContext);
  const handleAccountChange = (account: WalletAccount) => {
    dispatch({
      type: "SET_CURRENT_ACCOUNT",
      payload: { ...account },
    });
    setIsShowAside(false);
  };
  return (
    <div className="selected-wallet">
      <header className="base-header">
        <div
          className="selected"
          onClick={() => {
            setIsShowAside(true);
          }}
        >
          <span>{appState.currentAccount?.chain}</span>
          <Icon
            onClick={() => {
              setIsShowAside(true);
            }}
            href={Icons.ArrowDownIcon.id}
            fill="#fff"
          />
        </div>
        <Icon
          href={Icons.SettingIcon.id}
          width={32}
          heihgt={32}
          fill="#18c9bd"
        />
      </header>
      <main>
        <div className="card">
          {appState.currentAccount ? (
            <>
              <span>我的资产($)</span>
              <h3>{appState.currentAccount.accountName}</h3>
              <Address text={appState.currentAccount.address} showCopy={true} />
            </>
          ) : null}
        </div>
        <ul className="token-list">
          {appState.currentAccount
            ? appState.currentAccount.tokens.map((token, index) => {
                return (
                  <li key={index}>
                    <img
                      src={
                        token.icon ||
                        "/img/coin/" +
                          appState.currentAccount?.chain.toLowerCase() +
                          ".svg"
                      }
                      alt=""
                    />
                    <span>{token.tokenName}</span>
                    <div className="right">
                      <span>{token.balance || 0}</span>
                      <p>$ 123123</p>
                      <Icon
                        href={Icons.ArrowRightIcon.id}
                        fill="#fff"
                        stroke="#fff"
                      />
                    </div>
                  </li>
                );
              })
            : null}
        </ul>
      </main>
      <footer>
        <BaseButton
          style={{
            width: "160px",
            backgroundColor: "transparent",
            border: "1px solid #18C9BD",
            color: "#18C9BD",
          }}
        >
          +添加代币
        </BaseButton>
      </footer>
      <Drawer isShowAside={isShowAside} position="left">
        <div className="header">
          <h4>钱包列表</h4>
          <Icon
            onClick={() => {
              setIsShowAside(false);
            }}
            href={Icons.CrossIcon.id}
            fill="#282828"
            stroke="#00000000"
          />
        </div>
        <WalletList onChange={handleAccountChange} />
      </Drawer>
    </div>
  );
};
export default Main;
