import React from "react";
import ETH from "@/images/coin/eth.svg";
import BTC from "@/images/coin/btc.svg";
import LTC from "@/images/coin/ltc.svg";
import FIL from "@/images/coin/fil.svg";
import DOGE from "@/images/coin/doge.svg";
import TRX from "@/images/coin/trx.svg";
import DOT from "@/images/coin/dot.svg";
import TAO from "@/images/coin/tao.svg";
import SettingIcon from "@/images/setting.svg";
import ArrowDownIcon from "@/images/arrow-down.svg";
import LogoIcon from "@/images/logo.svg";
import BackIcon from "@/images/back.svg";
import WarningIcon from "@/images/warning.svg";
import NoScreenShotsIcon from "@/images/no-screenshots.svg";
import WalletIcon from "@/images/wallet.svg";

interface IProps {
  fill?: string;
  stroke?: string;
  width?: number;
  heihgt?: number;
  href: string;
  onClick?: () => void;
}
export const Icon: React.FC<IProps> = ({
  fill = "#18c9bd",
  stroke = "#fff",
  width = 24,
  heihgt = 24,
  href,
  onClick,
}) => {
  const handleClick = () => {
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
export {
  BTC,
  ETH,
  LTC,
  FIL,
  TRX,
  DOGE,
  DOT,
  TAO,
  SettingIcon,
  ArrowDownIcon,
  LogoIcon,
  BackIcon,
  WarningIcon,
  NoScreenShotsIcon,
  WalletIcon,
};
