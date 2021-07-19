import React from "react";

import SettingIcon from "@/images/setting.svg";
import ArrowDownIcon from "@/images/arrow-down.svg";
import ArrowRightIcon from "@/images/arrow-right.svg";
import BackIcon from "@/images/back.svg";
import WarningIcon from "@/images/warning.svg";
import WalletIcon from "@/images/wallet.svg";
import CrossIcon from "@/images/cross.svg";
import EditIcon from "@/images/edit.svg";
import SendIcon from "@/images/send.svg";
import ReceiveIcon from "@/images/receive.svg";
import AddressIcon from "@/images/address.svg";
import UserIcon from "@/images/user.svg";
import CopyIcon from "@/images/copy.svg";
import EyeOpenIcon from "@/images/eye-open.svg";
import EyeCloseIcon from "@/images/eye-close.svg";
interface IProps {
  fill?: string;
  stroke?: string;
  width?: number;
  heihgt?: number;
  href: string;
  onClick?: () => void;
  className?: string;
}
interface IconProps {
  id: string;
  [key: string]: any;
}
export const Icon: React.FC<IProps> = ({
  fill = "#999cad",
  stroke = "#fff",
  width = 24,
  heihgt = 24,
  href,
  onClick,
  className,
}) => {
  const handleClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    onClick && onClick();
  };
  return (
    <svg
      onClick={handleClick}
      fill={fill}
      stroke={stroke}
      width={width}
      height={heihgt}
      className={className}
    >
      <use xlinkHref={"#" + href} />
    </svg>
  );
};
export const Icons: {
  SettingIcon: IconProps;
  ArrowDownIcon: IconProps;
  ArrowRightIcon: IconProps;
  BackIcon: IconProps;
  WarningIcon: IconProps;
  WalletIcon: IconProps;
  CrossIcon: IconProps;
  EditIcon: IconProps;
  SendIcon: IconProps;
  ReceiveIcon: IconProps;
  AddressIcon: IconProps;
  UserIcon: IconProps;
  CopyIcon: IconProps;
  EyeOpenIcon: IconProps;
  EyeCloseIcon: IconProps;
  [key: string]: IconProps;
} = {
  SettingIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  BackIcon,
  WarningIcon,
  WalletIcon,
  CrossIcon,
  EditIcon,
  SendIcon,
  ReceiveIcon,
  AddressIcon,
  UserIcon,
  CopyIcon,
  EyeOpenIcon,
  EyeCloseIcon,
};
