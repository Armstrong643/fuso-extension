import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Address } from "@/components";
import { Icons, Icon } from "@/components/Icon";
import { AccountsContext } from "@/context/accounts";
import { getChain } from "@/utils/chains";
interface Props {
  account: WalletAccount;
  handleClick?: (account: WalletAccount) => void;
  style?: React.CSSProperties;
  showIcon?: boolean;
}
export const AccountCard: React.FC<Props> = ({
  account,
  handleClick,
  style,
  showIcon,
}) => {
  const history = useHistory();
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
  const handleDetailClick = () => {
    history.push({
      pathname: "/walletdetail",
      state: account,
    });
  };
  return (
    <div
      className="account-card"
      style={{
        ...style,
        backgroundColor: getChain(account.chain)?.bg,
      }}
      onClick={handleCardClick}
    >
      {showIcon ? <img src={`/img/coin/${account.chain}.svg`} alt="" /> : null}
      <div>
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
        <Address text={account.address} showCopy={true} />
      </div>
      <Icon
        onClick={handleDetailClick}
        href={Icons.ArrowRightIcon.id}
        fill="#fff"
        stroke="#fff"
        width={16}
        heihgt={16}
        className="show-detail"
      />
    </div>
  );
};
