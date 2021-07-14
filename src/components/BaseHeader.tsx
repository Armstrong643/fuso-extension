import React from "react";
import { useHistory } from "react-router-dom";
import { Icons } from "@/components/Icon";
import { Icon } from "@/components";
export const BaseHeader: React.FC = () => {
  const history = useHistory();
  return (
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
  );
};
