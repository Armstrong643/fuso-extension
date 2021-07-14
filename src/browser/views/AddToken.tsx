import React, { useState, useMemo } from "react";
import { Layout, BaseInput, BaseButton } from "@/components";
interface FormProps {
  address: string;
  name: string;
  precision: string;
}
const Main: React.FC = () => {
  const [form, setForm] = useState<FormProps>({
    address: "",
    name: "",
    precision: "",
  });
  const disabled = useMemo(() => {
    return !form.address || !form.name || !form.precision;
  }, [form]);
  const footer = <BaseButton disabled={disabled}>添加代币</BaseButton>;
  return (
    <Layout className="add-token" title={"添加代币"} footer={footer}>
      <BaseInput
        value={form.address}
        onChange={(address) => {
          setForm({
            ...form,
            address,
          });
        }}
        placeholder="代币合约地址"
      />
      <BaseInput
        value={form.name}
        onChange={(name) => {
          setForm({
            ...form,
            name,
          });
        }}
        placeholder="代币名称"
      />
      <BaseInput
        value={form.precision}
        onChange={(precision) => {
          setForm({
            ...form,
            precision,
          });
        }}
        placeholder="代币精度"
      />
    </Layout>
  );
};
export default Main;
