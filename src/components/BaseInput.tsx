import React from "react";
import classnames from "classnames";
interface IProps {
  onChange?: (e: string) => void;
  style?: React.CSSProperties;
  className?: string;
  type?: "text" | "password" | "textarea";
  placeholder?: string;
  value?: string;
  iconClick?: () => void;
  tips?: string;
  readonly?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}
export const BaseInput: React.FC<IProps> = (props) => {
  let {
    onChange,
    type = "text",
    placeholder,
    className,
    style,
    tips,
    value,
    readonly,
    prefix,
    suffix,
  } = props;
  const classes = classnames("base-input", className);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { value } = e.target;
    onChange && onChange(value);
  };
  return (
    <div className={classes} style={style}>
      {prefix ? <span className="prefix">{prefix}</span> : null}
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
      {tips ? <p className="tips">{tips}</p> : null}
      {suffix ? <span className="suffix">{suffix}</span> : null}
    </div>
  );
};
