import React, { useState } from "react";
import { Icon } from "@/components";
import classnames from "classnames";
interface IProps {
  onChange?: (e: string) => void;
  style?: React.CSSProperties;
  className?: string;
  type?: "text" | "password" | "textarea";
  placeholder?: string;
  value?: string;
  icon?: string;
  iconClick?: () => void;
  tips?: string;
  readonly?: boolean;
}
export const BaseInput: React.FC<IProps> = (props) => {
  let {
    onChange,
    type = "text",
    placeholder,
    className,
    icon,
    iconClick,
    style,
    tips,
    value,
    readonly,
  } = props;
  const classes = classnames("base-input", className);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { value } = e.target;
    onChange && onChange(value);
  };
  const handleIconClick = () => {
    iconClick && iconClick();
  };
  return (
    <div className={classes} style={style}>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          readOnly={readonly}
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          readOnly={readonly}
        />
      )}
      {tips ? <p>{tips}</p> : null}
      {icon ? (
        <Icon
          href={icon}
          onClick={handleIconClick}
          fill="#999CAD"
          stroke="#999CAD00"
        />
      ) : null}
    </div>
  );
};
