import React, { useState, useMemo } from "react";
import { Layout, BaseInput, BaseButton, Drawer } from "@/components";
import { Icon, Icons } from "@/components/Icon";
import { Chains } from "@/utils/chains";
import "../styles/addaddress.scss";

interface FormProps {
  name: string;
  address: string;
}
const Main: React.FC = () => {
  const [chain, setChain] = useState<Chain>({
    name: "TAO",
    icon: "/img/coin/TAO.svg",
    bg: "#CC2F2F",
  });
  const [isShowAside, setIsShowAside] = useState(false);
  const [form, setForm] = useState<FormProps>({
    name: "",
    address: "",
  });
  const disabled = useMemo(() => {
    return !form.name || !form.address;
  }, [form]);
  const handleItemClick = (chain: Chain) => {
    setChain(chain);
    setIsShowAside(false);
  };
  const handleNextClick = () => {};
  const footer = (
    <BaseButton onClick={handleNextClick} disabled={disabled}>
      下一步
    </BaseButton>
  );
  const suffix = (
    <Icon
      onClick={() => {
        setIsShowAside(true);
      }}
      href={Icons.ArrowRightIcon.id}
      stroke="#999CAD"
    />
  );
  const prefix = <img src={chain.icon} alt="" width="24" />;
  return (
    <Layout className="add-address" title={"地址簿"} footer={footer}>
      <BaseInput prefix={prefix} suffix={suffix} value={chain.name} readonly />
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
      <Drawer
        onModalClick={() => {
          setIsShowAside(false);
        }}
        isShowAside={isShowAside}
        position="bottom"
      >
        <ul>
          {Chains.map((chain) => (
            <li
              key={chain.name}
              onClick={() => {
                handleItemClick(chain);
              }}
            >
              <img src={chain.icon} alt="" />
              <span>{chain.name}</span>
            </li>
          ))}
        </ul>
      </Drawer>
    </Layout>
  );
};
export default Main;
