import React, { useContext, useRef, useState } from "react";
import { Address } from "@/components";
import { Icons, Icon } from "@/components/Icon";
import { AccountsContext } from "@/context/accounts";

interface Props {
  account: WalletAccount;
  handleClick?: (account: WalletAccount) => void;
}
export const AccountCard: React.FC<Props> = ({ account, handleClick }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleCardClick = () => {
    handleClick && handleClick(account);
  };
  const ref = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext(AccountsContext);
  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    let { value } = e.currentTarget;
    if (value !== "") {
      dispatch({
        type: "UPDATE_ACCOUNT",
        payload: {
          ...account,
          accountName: value,
        },
      });
    }
  };
  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleEditClick = () => {
    ref.current?.focus();
    setIsFocused(true);
  };
  return (
    <div className="account-card" onClick={handleCardClick}>
      <h5
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <input
          ref={ref}
          value={account.accountName}
          onChange={handleChange}
          onBlur={handleBlur}
          onClick={handleInputClick}
          readOnly={!isFocused}
        />
        <Icon
          onClick={handleEditClick}
          href={Icons.EditIcon.id}
          fill="#ffffff00"
          stroke="#fff"
          width={16}
          heihgt={16}
        />
      </h5>
      <Address
        text={account.address}
        showCopy={true}
        style={{
          color: "#fff",
          opacity: 0.6,
        }}
      />
    </div>
  );
};
