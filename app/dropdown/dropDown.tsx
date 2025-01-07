import React from "react";
import DropdownSection from "@/components/dropdownSection";
import { UserOutlined } from "@ant-design/icons"; // Import icons if using Ant Design
import { DropDownButton, DropDownMain } from "./style";

const DropDown: React.FC = () => {
  const items = [
    { label: "1st menu item", key: "1" },
    { label: "2nd menu item", key: "2", icon: <UserOutlined /> },
    { label: "3rd menu item", key: "3", icon: <UserOutlined />, danger: true },
    {
      label: "4th menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];

  return (
    <DropDownMain>
      <DropdownSection
        trigger={<DropDownButton>Open Dropdown</DropDownButton>}
        items={items}
      />
    </DropDownMain>
  );
};

export default DropDown;
