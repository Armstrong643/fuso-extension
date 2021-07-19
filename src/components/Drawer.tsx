import React, { useMemo } from "react";
import classnames from "classnames";
interface IProps {
  position?: "left" | "right" | "top" | "bottom";
  isShowAside: boolean;
  onModalClick?: () => void;
}
export const Drawer: React.FC<IProps> = ({
  position = "left",
  children,
  isShowAside,
  onModalClick,
}) => {
  const styles = useMemo(() => {
    switch (position) {
      case "left":
        return {
          transform: isShowAside ? "translateX(0)" : "translateX(-100%)",
          left: 0,
          top: 0,
          height: "100%",
        };
      case "right":
        return {
          transform: isShowAside ? "translateX(0)" : "translateX(100%)",
          right: 0,
          top: 0,
          height: "100%",
        };
      case "bottom":
        return {
          transform: isShowAside ? "translateY(0)" : "translateY(100%)",
          left: 0,
          bottom: 0,
          width: "100%",
        };
      case "top":
        return {
          transform: isShowAside ? "translateY(0)" : "translateY(-100%)",
          left: 0,
          top: 0,
          width: "100%",
        };
    }
  }, [isShowAside]);
  const classes = classnames("drawer", {
    show: isShowAside,
    hide: !isShowAside,
  });
  return (
    <div
      className={classes}
      onClick={() => {
        onModalClick && onModalClick();
      }}
    >
      <div
        className="content"
        style={styles}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
