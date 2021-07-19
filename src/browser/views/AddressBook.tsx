import React from "react";
import { useHistory } from "react-router-dom";
import { Layout, BaseButton } from "@/components";
import { Icon, Icons } from "@/components/Icon";
import { shortenAddress } from "@/utils/util";
import "../styles/addressbook.scss";
const contactList: Contact[] = [
  {
    name: "zs",
    chain: "ETH",
    address: "xmbv1238dfkzcjkshdio2asda",
  },
  {
    name: "LS",
    chain: "TAO",
    address: "WKEYR98127sdnfqoueasdqeqw",
  },
  {
    name: "LS",
    chain: "TAO",
    address: "WKEYR98127sdnfqoueasdqeqw",
  },
  {
    name: "LS",
    chain: "TAO",
    address: "WKEYR98127sdnfqoueasdqeqw",
  },
  {
    name: "LS",
    chain: "TAO",
    address: "WKEYR98127sdnfqoueasdqeqw",
  },
  {
    name: "LS",
    chain: "TAO",
    address: "WKEYR98127sdnfqoueasdqeqw",
  },
  {
    name: "LS",
    chain: "TAO",
    address: "WKEYR98127sdnfqoueasdqeqw",
  },
  {
    name: "LS",
    chain: "TAO",
    address: "WKEYR98127sdnfqoueasdqeqw",
  },
];
const Main: React.FC = () => {
  const history = useHistory();
  const handleItemClick = (contact: Contact) => {
    history.push({
      pathname: "/editaddress",
      state: contact,
    });
  };
  const footer = (
    <BaseButton
      onClick={() => {
        history.push("/addaddress");
      }}
      blank={true}
    >
      +添加地址
    </BaseButton>
  );
  return (
    <Layout className="address-book" title={"地址簿"} footer={footer}>
      <ul>
        {contactList.map(({ name, chain, address }, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleItemClick({
                  name,
                  chain,
                  address,
                });
              }}
            >
              <img src={`/img/coin/${chain}.svg`} alt="" />
              <div>
                <h4>{name}</h4>
                <p>{shortenAddress(address)}</p>
              </div>
              <Icon
                href={Icons.ArrowRightIcon.id}
                fill="#999CAD00"
                stroke="#999CAD"
                width={16}
                heihgt={16}
              />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};
export default Main;
