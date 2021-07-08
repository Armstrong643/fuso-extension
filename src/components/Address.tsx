import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Icon } from "@/components";
import CopyIcon from "@/images/copy.svg";
interface IProps {
  text: string;
  showCopy?: boolean;
}
function shortenAddress(address: string) {
  return address.replace(/(.{6})(.*)(.{6})/, "$1...$3");
}
export const Address: React.FC<IProps> = (props) => {
  let { text, showCopy } = props;
  return (
    <CopyToClipboard text={text}>
      <div className="copy-address">
        <span>{shortenAddress(text)}</span>
        {showCopy ? (
          <Icon href={CopyIcon.id} width={16} heihgt={16} stroke="red" />
        ) : null}
      </div>
    </CopyToClipboard>
  );
};
