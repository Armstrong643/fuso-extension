import React, { useState, useMemo } from "react";
import { BaseButton, PassInput } from "@/components";
import "../styles/comeback.scss";
import logoImg from "@/images/logo.svg";
const Main: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const handleChange = (value: string) => {
    setPassword(value);
  };
  const disabled = useMemo(() => {
    return password === "";
  }, [password]);
  return (
    <div className="come-back">
      <img src={logoImg} alt="" />
      <h3>欢迎回来</h3>
      <PassInput
        placeholder="密码"
        style={{
          marginBottom: "30px",
        }}
        onChange={handleChange}
      />
      <BaseButton disabled={disabled}>解锁</BaseButton>
    </div>
  );
};
export default Main;
