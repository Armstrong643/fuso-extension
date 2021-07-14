import React, { useEffect, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AppContext } from "@/context/app";
import { useHistory } from "react-router-dom";
import { Icon, Icons } from "@/components/Icon";
import { BaseButton } from "@/components";
import Qrcode from "qrcode.react";
import { Layout } from "@/components";
import "../styles/receive.scss";
const Main: React.FC = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#18C9BD";
    return () => {
      document.body.style.backgroundColor = "#fff";
    };
  }, []);
  const history = useHistory();
  const {
    appState: { currentAccount },
  } = useContext(AppContext);
  const header = (
    <header className="base-header">
      <Icon
        href={Icons.BackIcon.id}
        stroke="#ffffff00"
        fill="#fff"
        onClick={() => {
          history.goBack();
        }}
      />
      返回
    </header>
  );
  return (
    <Layout className="receive" title={"收款"} header={header}>
      {currentAccount ? (
        <>
          <p>扫一扫，转入ETH</p>
          <div className="qrcode">
            <Qrcode value={currentAccount.address} size={160} />
          </div>
          <p>钱包地址</p>
          <h4>{currentAccount.address}</h4>
          <CopyToClipboard text={currentAccount.address}>
            <BaseButton
              style={{
                width: 160,
                marginTop: 20,
                border: "1px solid #fff",
              }}
            >
              复制
            </BaseButton>
          </CopyToClipboard>
        </>
      ) : null}
    </Layout>
  );
};
export default Main;
