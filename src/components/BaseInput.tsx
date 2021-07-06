import React, { useState } from "react";
import classnames from "classnames";
interface IProps {
  onChange?: (e: string) => void;
  style?: React.CSSProperties;
  className?: string;
  type?: "text" | "password" | "textarea";
  placeholder?: string;
  defaultValue?: string;
  icon?: string;
  iconClick?: () => void;
  tips?: string;
}
export const BaseInput: React.FC<IProps> = (props) => {
  const [value, setValue] = useState<string>();
  let {
    onChange,
    type = "text",
    placeholder,
    className,
    icon,
    iconClick,
    style,
    tips,
  } = props;
  const classes = classnames("base-input", className);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { value } = e.target;
    setValue(e.target.value);
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
        ></textarea>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
      )}
      {tips ? <p>{tips}</p> : null}
      {icon ? <img src={icon} alt="" onClick={handleIconClick} /> : null}
    </div>
  );
};
