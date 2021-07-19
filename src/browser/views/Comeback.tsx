import React, { useState, useMemo, useEffect } from "react";
import { BaseButton, PassInput, Icon } from "@/components";
import { data2keccak512, encryptMessage, decryptMessage } from "@/utils/crypto";
import extension from "@/utils/chrome";
import "../styles/comeback.scss";
const Main: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [tips, setTips] = useState("");
  const handleChange = (value: string) => {
    setPassword(value);
  };
  const disabled = useMemo(() => {
    return password === "";
  }, [password]);
  const unLockWallet = async () => {
    extension.sendMessage("from popup", (res) => {
      console.log(res);
    });
    const hash = data2keccak512(password);
    const storage = (await extension.getStorage("fuso")) as any;
    let encryptString: string = storage["fuso"];
    let decrypt = decryptMessage(encryptString, hash);
    console.log(decrypt);
  };
  return (
    <div className="come-back">
      <img src="/img/logo.svg" alt="" />
      <h3>欢迎回来</h3>
      <PassInput
        placeholder="密码"
        style={{
          marginBottom: "30px",
        }}
        onChange={handleChange}
        tips={tips}
      />
      <BaseButton onClick={unLockWallet} disabled={disabled}>
        解锁
      </BaseButton>
    </div>
  );
};
export default Main;
