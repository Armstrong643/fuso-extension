import React from "react";
import { NavLink } from "react-router-dom";
import { BaseButton, Icon } from "@/components";
import { Icons } from "@/components/Icon";
import "../styles/startup.scss";
const Main: React.FC = () => {
  return (
    <div className="start-up">
      <Icon href={Icons.WalletIcon.id} />
      <h3>
        <span>FUSOTAO</span> 钱包
      </h3>
      <BaseButton
        style={{
          margin: "116px 0 32px",
        }}
      >
        创建新钱包
      </BaseButton>
      <NavLink to="/import">我已有一个钱包</NavLink>
    </div>
  );
};
export default Main;
