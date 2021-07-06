import React from "react";
import classnames from "classnames";
interface IProps {
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
}
export const BaseButton: React.FC<IProps> = (props) => {
  let { onClick, children, style, className, disabled } = props;
  const classes = classnames("base-button", className, {
    disabled: disabled,
  });
  const handleClick = () => {
    if (disabled) {
      return;
    }
    onClick && onClick();
  };
  return (
    <button className={classes} onClick={handleClick} style={style}>
      {children || "Button"}
    </button>
  );
};
