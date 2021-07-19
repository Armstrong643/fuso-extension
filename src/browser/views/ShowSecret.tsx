import React, { useMemo, useState, useContext } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { Layout, PassInput, BaseButton, BaseInput } from "@/components";
import { AccountsContext } from "@/context/accounts";
import { Icon, Icons } from "@/components/Icon";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getAccount } from "@/utils/util";
import "../styles/showsecret.scss";
const Main: React.FC = () => {
  const history = useHistory();
  const location = useLocation<WalletAccount>();
  const { accounts } = useContext(AccountsContext);
  const account = getAccount(location.state, accounts);
  const { type } = useParams<{ type: "mnemonic" | "privatekey" }>();
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(0);
  const disabled = useMemo(() => {
    return password === "";
  }, [password]);
  const handleClick = () => {
    if (step === 0) {
      setStep(1);
    } else {
      history.goBack();
    }
  };
  const footer = (
    <BaseButton blank={step !== 0} onClick={handleClick} disabled={disabled}>
      {step === 0 ? "下一步" : "关闭"}
    </BaseButton>
  );
  return (
    <Layout
      className="show-mnemonic"
      title={type === "mnemonic" ? "助记词" : "私钥"}
      footer={footer}
    >
      <div className="warning">
        <Icon
          href={Icons.WarningIcon.id}
          fill="#FAAD14"
          stroke="#FAAD1400"
          width={16}
          heihgt={16}
        />
        <h4>不要对任何人展示此账户助记词！</h4>
        <p>该账户助记词可以用来窃取您的所有帐户</p>
      </div>
      <p>
        {step === 0
          ? "输入密码以继续"
          : type === "mnemonic"
          ? "你的助记词"
          : "你的私钥"}
      </p>
      {step === 0 ? (
        <PassInput
          placeholder={"密码"}
          onChange={(password) => {
            setPassword(password);
          }}
        />
      ) : (
        <>
          <BaseInput
            type="textarea"
            readonly={true}
            value={
              type === "mnemonic" ? account?.mnemonic : account?.privateKey
            }
          />
          <p>
            <Icon href={Icons.CopyIcon.id} stroke="#282828" fill="#ffffff00" />
            <CopyToClipboard text={account?.address || "copy"}>
              <>复制到粘贴板</>
            </CopyToClipboard>
          </p>
        </>
      )}
    </Layout>
  );
};
export default Main;
