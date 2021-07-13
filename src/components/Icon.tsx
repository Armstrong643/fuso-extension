import React from "react";

import SettingIcon from "@/images/setting.svg";
import ArrowDownIcon from "@/images/arrow-down.svg";
import ArrowRightIcon from "@/images/arrow-right.svg";
import BackIcon from "@/images/back.svg";
import WarningIcon from "@/images/warning.svg";
import WalletIcon from "@/images/wallet.svg";
import CrossIcon from "@/images/cross.svg";
import EditIcon from "@/images/edit.svg";
interface IProps {
  fill?: string;
  stroke?: string;
  width?: number;
  heihgt?: number;
  href: string;
  onClick?: () => void;
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
};
