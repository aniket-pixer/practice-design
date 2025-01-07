import React, { useState, ReactNode, useRef } from "react";
import { useClickAway } from "react-use"; // For closing the dropdown when clicking outside
import { Dropdown, Menu, MenuItem, Trigger } from "./style";

interface DropdownItem {
  label: string;
  key: string;
  icon?: ReactNode;
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

interface DropdownProps {
  trigger?: ReactNode; // Button or trigger element
  items: DropdownItem[]; // Dropdown items
}

const DropdownSection: React.FC<DropdownProps> = ({ trigger, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickAway(dropdownRef, () => setIsOpen(false)); // Close when clicking outside

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Dropdown ref={dropdownRef}>
      <Trigger onClick={toggleDropdown}>{trigger}</Trigger>
      {isOpen && (
        <Menu>
          {items.map((item) => (
            <MenuItem
              key={item.key}
              onClick={() => {
                if (!item.disabled && item.onClick) {
                  item.onClick();
                }
                setIsOpen(false); // Close dropdown after clicking
              }}
              style={{
                color: item.danger ? "red" : "inherit",
                cursor: item.disabled ? "not-allowed" : "pointer",
                opacity: item.disabled ? 0.5 : 1,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Dropdown>
  );
};

export default DropdownSection;
