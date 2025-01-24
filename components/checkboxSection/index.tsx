import React from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
} from "./style";

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
  children,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };
  return (
    <CheckboxContainer disabled={disabled}>
      <HiddenCheckbox
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <StyledCheckbox checked={checked} disabled={disabled} />
      {children && <Label disabled={disabled}>{children}</Label>}
    </CheckboxContainer>
  );
};

export default CustomCheckbox;
