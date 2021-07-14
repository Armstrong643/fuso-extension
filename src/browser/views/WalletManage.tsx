import React, { useState } from "react";
import { Layout, WalletList, BaseButton, Drawer } from "@/components";
import "../styles/walletmanage.scss";
const Main: React.FC = () => {
  const [isShowAside, setIsShowAside] = useState(false);
  const footer = (
    <BaseButton
      style={{
        backgroundColor: "#fff",
        border: "1px solid #18C9BD",
        color: "#18C9BD",
      }}
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
        <div>创建钱包</div>
        <div>导入钱包</div>
      </Drawer>
    </Layout>
  );
};
export default Main;
