import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "@/context/app";
import {
  Layout,
  Icon,
  Address,
  WalletList,
  Drawer,
  BaseButton,
} from "@/components";
import { Icons } from "@/components/Icon";
import "../styles/accounts.scss";
const Main: React.FC = () => {
  const [isShowLeftAside, setIsShowLeftAside] = useState<boolean>(false);
  const [isShowRightAside, setIsShowRightAside] = useState<boolean>(true);
  const { appState, dispatch } = useContext(AppContext);
  const history = useHistory();
  const handleAccountChange = (account: WalletAccount) => {
    dispatch({
      type: "SET_CURRENT_ACCOUNT",
      payload: { ...account },
    });
    setIsShowLeftAside(false);
  };
  const menuClick = (menu: string) => {
    history.push(menu);
  };
  const header = (
    <header className="base-header">
      <div
        className="selected"
        onClick={() => {
          setIsShowLeftAside(true);
        }}
      >
        <span>{appState.currentAccount?.chain}</span>
        <Icon
          onClick={() => {
            setIsShowLeftAside(true);
          }}
          href={Icons.ArrowDownIcon.id}
          fill="#fff"
        />
      </div>
      <Icon
        onClick={() => {
          setIsShowRightAside(true);
        }}
        href={Icons.SettingIcon.id}
        width={32}
        heihgt={32}
        fill="#18c9bd"
      />
    </header>
  );
  const footer = (
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
  );
  return (
    <Layout className="accounts" header={header} footer={footer}>
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
                      "/img/coin/" + appState.currentAccount?.chain + ".svg"
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
      <Drawer
        onModalClick={() => {
          setIsShowLeftAside(false);
        }}
        isShowAside={isShowLeftAside}
        position="left"
      >
        <div className="header">
          <h4>钱包列表</h4>
          <Icon
            onClick={() => {
              setIsShowLeftAside(false);
            }}
            href={Icons.CrossIcon.id}
            fill="#282828"
            stroke="#00000000"
          />
        </div>
        <WalletList onChange={handleAccountChange} />
      </Drawer>
      <Drawer
        onModalClick={() => {
          setIsShowRightAside(false);
        }}
        isShowAside={isShowRightAside}
        position="right"
      >
        <div className="header">
          <h4>我的账户</h4>
        </div>
        <ul className="menu">
          <li
            onClick={() => {
              menuClick("/walletmanage");
            }}
          >
            <Icon
              href={Icons.WalletIcon.id}
              stroke="#282828"
              fill="#28282800"
            />
            <span>钱包管理</span>
            <Icon href={Icons.ArrowRightIcon.id} />
          </li>
          <li
            onClick={() => {
              menuClick("/addressbook");
            }}
          >
            <Icon
              href={Icons.AddressIcon.id}
              stroke="#282828"
              fill="#28282800"
            />
            <span>地址簿</span>
            <Icon href={Icons.ArrowRightIcon.id} />
          </li>
          <li
            onClick={() => {
              menuClick("/aboutus");
            }}
          >
            <Icon href={Icons.UserIcon.id} stroke="#282828" fill="#28282800" />
            <span>关于我们</span>
            <Icon href={Icons.ArrowRightIcon.id} />
          </li>
        </ul>
      </Drawer>
    </Layout>
  );
};
export default Main;
