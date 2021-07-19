import React from "react";
import classnames from "classnames";
interface IProps {
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  blank?: boolean;
}
export const BaseButton: React.FC<IProps> = (props) => {
  let { onClick, children, style, className, disabled, blank = false } = props;
  const classes = classnames("base-button", className, {
    disabled,
    blank,
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
