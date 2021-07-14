import React from "react";
import { useHistory } from "react-router-dom";
import { Icons } from "@/components/Icon";
import { Icon } from "@/components";
interface Props {
  header?: React.ReactNode;
  main?: React.ReactNode;
  footer?: React.ReactNode;
  title?: string;
  className?: string;
}
export const Layout: React.FC<Props> = ({
  header,
  children,
  footer,
  title,
  className,
}) => {
  const history = useHistory();
  return (
    <div className={"layout " + className || ""}>
      {header ? (
        header
      ) : (
        <header className="base-header">
          <Icon
            href={Icons.BackIcon.id}
            stroke="#999cad00"
            onClick={() => {
              history.goBack();
            }}
          />
          返回
        </header>
      )}
      <main>
        {title ? <h3> {title}</h3> : null}
        {children}
      </main>
      <footer>{footer}</footer>
    </div>
  );
};
