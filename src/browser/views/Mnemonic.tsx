import React, { useState, useMemo, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BaseButton, BaseInput, Icon } from "@/components";
import { AppContext } from "@/context/mnemonic";
import { mnemonicGenerate, mnemonicValidate } from "@polkadot/util-crypto";
import { BackIcon, NoScreenShotsIcon, WarningIcon } from "@/components/Icon";
import "../styles/mnemonic.scss";
import extension from "@/utils/chrome";
const textMap = {
  create: {
    title: "您的助记词",
    tip1: "按照正确的顺序记下这些单词，并将它们保存在安全的地方。",
    buttonText: "下一步",
  },
  import: {
    title: "验证助记词",
    tip1: "按照正确的顺序写下助记词",
    buttonText: "确认",
  },
};
const Main: React.FC = () => {
  const history = useHistory();
  const { type } = useParams<{ type: "create" | "import" }>();
  const [isMaskShow, setIsMaskShow] = useState<boolean>(false);
  const { mnemonic, setMnemonic } = useContext(AppContext);
  const [userMnemonic, setUserMnemonic] = useState<string>("");
  const disabled = useMemo(() => {
    return type !== "create" && !mnemonicValidate(userMnemonic);
  }, [type, userMnemonic]);
  useEffect(() => {
    let newMnemonic = "";
    if (!mnemonic) {
      newMnemonic = mnemonicGenerate();
      setMnemonic(newMnemonic);
    }
    if (type === "create") {
      setUserMnemonic(mnemonic || newMnemonic);
    } else {
      setUserMnemonic("");
    }
  }, [type]);
  const handleChange = (value: string) => {
    setUserMnemonic(value);
  };
  const handleClick = () => {
    extension.getAllWindows().then((res) => {
      console.log(res);
    });
    extension.createWindow();
    if (type === "create") {
      history.push("/mnemonic/import");
    }
  };
  return (
    <div className="mnemonic">
      <header className="base-header">
        <Icon
          href={BackIcon.id}
          onClick={() => {
            history.goBack();
          }}
        />
        返回
      </header>
      <main>
        <h3> {textMap[type].title}</h3>
        <p>{textMap[type].tip1}</p>
        <BaseInput
          type="textarea"
          style={{
            marginBottom: "26px",
            color: "#282828",
          }}
          placeholder="请输入助记词，用空格分割"
          onChange={handleChange}
          value={userMnemonic}
          readonly={type === "create"}
        />
      </main>
      <footer>
        {type === "create" ? (
          <div className="warning">
            <Icon href={WarningIcon.id} />
            <p>切勿与任何人分享助记词，安全的存储它！</p>
            <p>助记词一旦丢失，资产将无法恢复</p>
            <p>请勿通过截屏、网络传输的方式进行备份保存</p>
          </div>
        ) : null}
        <BaseButton onClick={handleClick} disabled={disabled}>
          {textMap[type].buttonText}
        </BaseButton>
      </footer>
      {isMaskShow ? (
        <div className="mask">
          <div className="no-screenshots">
            <Icon href={NoScreenShotsIcon.id} />
            <h3>切勿截图</h3>
            <p>
              请勿截取屏幕快照进行共享和存储，否则可能会被第三方恶意软件收集并造成资产损失
            </p>
            <div className="line"></div>
            <span
              onClick={() => {
                setIsMaskShow(false);
              }}
            >
              确认
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Main;
