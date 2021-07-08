import React, { useState } from "react";
import { BaseInput } from "./BaseInput";
import EyeOpenIcon from "@/images/eye-open.svg";
import EyeCloseIcon from "@/images/eye-close.svg";
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
  return (
    <BaseInput
      icon={type === "password" ? EyeCloseIcon.id : EyeOpenIcon.id}
      type={type}
      iconClick={iconClick}
      placeholder={placeholder}
      style={style}
      onChange={onChange}
      tips={tips}
    />
  );
};
