import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Layout, WalletList, BaseButton, Drawer } from "@/components";
import "../styles/walletmanage.scss";
const Main: React.FC = () => {
  const [isShowAside, setIsShowAside] = useState(false);
  const history = useHistory();
  const footer = (
    <BaseButton
      blank={true}
      onClick={() => {
        setIsShowAside(true);
      }}
    >
      + 添加钱包
    </BaseButton>
  );
  return (
    <Layout footer={footer} className="wallet-manage" title={"钱包管理"}>
      <WalletList />
      <Drawer
        isShowAside={isShowAside}
        onModalClick={() => {
          setIsShowAside(false);
        }}
        position="bottom"
      >
        <div
          onClick={() => {
            history.push("/showmnemonic");
          }}
        >
          创建钱包
        </div>
        <div
          onClick={() => {
            history.push("/mnemonic/import");
          }}
        >
          导入钱包
        </div>
      </Drawer>
    </Layout>
  );
};
export default Main;
