import React, { useState } from "react";
import { BaseInput } from "./BaseInput";
import { Icon, Icons } from "@/components/Icon";
interface IProps {
  placeholder?: string;
  style?: React.CSSProperties;
  onChange?: (value: string) => void;
  tips?: string;
}
export const PassInput: React.FC<IProps> = (props) => {
  const [type, setType] = useState<"password" | "text">("password");
  let { placeholder, style, onChange, tips } = props;
  const iconClick = () => {
    setType(type === "password" ? "text" : "password");
  };
  const suffix = (
    <Icon
      href={type === "password" ? Icons.EyeCloseIcon.id : Icons.EyeOpenIcon.id}
      onClick={iconClick}
      fill="#999CAD"
      stroke="#999CAD00"
    />
  );
  return (
    <BaseInput
      suffix={suffix}
      type={type}
      placeholder={placeholder}
      style={style}
      onChange={onChange}
      tips={tips}
    />
  );
};
