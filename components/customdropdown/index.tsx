import React from "react";
import { Dropdown, Menu, Button } from "antd";
import type { MenuProps } from "antd";

interface MenuItem {
  label: React.ReactNode; // Content to display in the menu
  key?: string; // Unique key for the menu item
}

interface CustomDropdownProps {
  menuList: MenuItem[]; // Array of menu items
  buttonLabel?: string; // Text to display on the dropdown button
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight"; // Placement of the dropdown
  onMenuClick?: MenuProps["onClick"]; // Callback for menu item clicks
  dropdownClassName?: string; // Custom class name for additional styling
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  menuList,
  buttonLabel = "Dropdown",
  placement = "bottomLeft",
  onMenuClick = () => {},
  dropdownClassName = "",
}) => {
  const items: MenuProps["items"] = menuList.map((item, index) => ({
    key: item.key || index.toString(),
    label: item.label,
  }));

  const menuProps: MenuProps = {
    items,
    onClick: onMenuClick,
  };

  return (
    <Dropdown
      menu={menuProps}
      placement={placement}
      className={dropdownClassName}
    >
      <Button>{buttonLabel}</Button>
    </Dropdown>
  );
};

export default CustomDropdown;
