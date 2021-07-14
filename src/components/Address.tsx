import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Icon } from "@/components";
import CopyIcon from "@/images/copy.svg";
import { shortenAddress } from "@/utils/util";
interface IProps {
  text: string;
  showCopy?: boolean;
  stroke?: string;
  fill?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export const Address: React.FC<IProps> = (props) => {
  let {
    text,
    showCopy,
    stroke = "#fff",
    fill = "#ffffff00",
    width = 16,
    height = 16,
    style,
  } = props;
  return (
    <div
      className="copy-address"
      style={style}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <span>{shortenAddress(text)}</span>
      <span>
        <CopyToClipboard text={text}>
          {showCopy ? (
            <Icon
              href={CopyIcon.id}
              width={width}
              heihgt={height}
              stroke={stroke}
              fill={fill}
            />
          ) : (
            <></>
          )}
        </CopyToClipboard>
      </span>
    </div>
  );
};
