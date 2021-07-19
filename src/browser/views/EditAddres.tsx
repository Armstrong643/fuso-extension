import React, { useState, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Layout, BaseInput, BaseButton } from "@/components";
import "../styles/addaddress.scss";

interface FormProps {
  name: string;
  address: string;
}
const Main: React.FC = () => {
  const history = useHistory();
  const { state } = useLocation<FormProps>();
  const [form, setForm] = useState<FormProps>(state);
  const disabled = useMemo(() => {
    return !form.name || !form.address;
  }, [form]);
  const handleNextClick = () => {};
  const footer = (
    <>
      <BaseButton
        onClick={() => {
          history.goBack();
        }}
        blank={true}
        style={{
          width: 150,
          marginRight: 20,
        }}
      >
        取消
      </BaseButton>
      <BaseButton
        style={{
          width: 150,
        }}
        onClick={handleNextClick}
        disabled={disabled}
      >
        保存
      </BaseButton>
    </>
  );
  return (
    <Layout className="add-address" title={"地址簿"} footer={footer}>
      <BaseInput
        placeholder={"名称"}
        value={form.name}
        onChange={(name) => {
          setForm({
            ...form,
            name,
          });
        }}
      />
      <BaseInput
        placeholder={"地址"}
        value={form.address}
        onChange={(address) => {
          setForm({
            ...form,
            address,
          });
        }}
      />
      <BaseButton
        style={{
          borderColor: "#EB5757",
          color: "#EB5757",
        }}
        blank={true}
      >
        删除
      </BaseButton>
    </Layout>
  );
};
export default Main;
