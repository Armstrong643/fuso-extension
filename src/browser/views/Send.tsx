import React, { useState, useMemo } from "react";
import { Layout, BaseInput, BaseButton } from "@/components";
import "../styles/send.scss";
interface Form {
  address: string;
  amount: string;
}
const Main: React.FC = () => {
  const [form, setForm] = useState<Form>({
    address: "",
    amount: "",
  });
  const disabled = useMemo(() => {
    return !form.address || !form.amount;
  }, [form]);
  const footer = <BaseButton disabled={disabled}>确认</BaseButton>;
  return (
    <Layout className="send" title={"发送"} footer={footer}>
      <p>发送到</p>
      <BaseInput
        placeholder={"钱包地址"}
        value={form.address}
        onChange={(address) => {
          setForm({
            ...form,
            address,
          });
        }}
      />
      <p>
        <span>数量</span>
        <span>
          <i>可用余额：</i> 500 ETH
        </span>
      </p>
      <BaseInput
        placeholder={"数量"}
        value={form.amount}
        onChange={(amount) => {
          setForm({
            ...form,
            amount,
          });
        }}
      />
      <p>
        <span>矿工费</span>
        <span>0.2 ETH</span>
      </p>
    </Layout>
  );
};
export default Main;
