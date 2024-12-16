import React from "react";
import CustomDropdown from "@/components/customdropdown";
import type { MenuInfo } from "rc-menu/lib/interface"; // Import MenuInfo type for clarity
import { CustomDropdownMain } from "./style";

const CustomDropdownHome = () => {
  const menuList = [
    { label: "Option 1", key: "1" },
    { label: "Option 2", key: "2" },
    { label: "Option 3", key: "3" },
  ];

  const handleMenuClick = (info: MenuInfo) => {
    console.log("Clicked item key:", info.key); // Access the key from the MenuInfo object
  };

  return (
    <CustomDropdownMain>
      <h1>Custom Dropdown Example</h1>
      <CustomDropdown
        menuList={menuList}
        buttonLabel="Select an Option"
        onMenuClick={handleMenuClick}
      />
    </CustomDropdownMain>
  );
};

export default CustomDropdownHome;
