import React, { useState, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { PassInput, BaseButton, BaseInput } from "@/components";
import BackIcon from "@/images/back.svg";
import "../styles/createwallet.scss";
const Main: React.FC = () => {
  const history = useHistory();
  const { type } = useParams<{ type: string }>();
  const [mnemonic, setMnemonic] = useState<string>();
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [tips1, setTips1] = useState<string>("");
  const [tips2, setTips2] = useState<string>("");
  const [tips3, setTips3] = useState<string>("");
  const disabled = useMemo(() => {
    if (type === "import" && mnemonic === "") {
      return true;
    }
    if (password1 === "" || password2 === "") {
      return true;
    }
    if (password1 !== password2) {
      return true;
    }
    return false;
  }, [password1, password2, mnemonic]);
  const handleChange1 = (value: string) => {
    setTips1(value === "" ? "请输入密码" : "");
    setTips2(password2 === value ? "" : "密码不一致");
    setPassword1(value);
  };
  const handleChange2 = (value: string) => {
    setTips2(password1 === value ? "" : "密码不一致");
    setPassword2(value);
  };
  const handleChange3 = (value: string) => {
    setTips3(value === "" ? "请输入助记词" : "");
    setMnemonic(value);
  };
  const handleClick = () => {};
  return (
    <div className="create-wallet">
      <header>
        <img
          src={BackIcon}
          alt=""
          onClick={() => {
            history.goBack();
          }}
        />
        返回
      </header>
      <main>
        <h3> {type === "new" ? "创建钱包" : "助记词导入"}</h3>
        {type === "import" ? (
          <BaseInput
            type="textarea"
            style={{
              marginBottom: "26px",
            }}
            placeholder="请输入助记词，用空格分割"
            onChange={handleChange3}
            tips={tips3}
          />
        ) : null}

        <PassInput
          placeholder="密码"
          style={{
            marginBottom: "26px",
          }}
          onChange={handleChange1}
          tips={tips1}
        />
        <PassInput
          placeholder="确认密码"
          onChange={handleChange2}
          tips={tips2}
        />
      </main>
      <footer>
        <BaseButton onClick={handleClick} disabled={disabled}>
          下一步
        </BaseButton>
      </footer>
    </div>
  );
};
export default Main;
