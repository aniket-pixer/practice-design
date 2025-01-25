import styled from "styled-components";

interface StyledProps {
  checked?: boolean;
  disabled?: boolean;
}

export const CheckboxContainer = styled.label<StyledProps>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const StyledCheckbox = styled.span<StyledProps>`
  width: 16px;
  height: 16px;
  border: 1px solid
    ${({ checked, disabled }) =>
      disabled ? "#d9d9d9" : checked ? "#1890ff" : "#d9d9d9"};
  background-color: ${({ checked, disabled }) =>
    disabled ? "#f5f5f5" : checked ? "#1890ff" : "white"};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: ${({ checked, disabled }) =>
    !disabled && checked ? "0 0 0 3px rgba(24, 144, 255, 0.2)" : "none"};

  &:after {
    content: ${({ checked }) => (checked ? "'✔'" : "''")};
    color: white;
    font-size: 12px;
  }
`;

export const Label = styled.span<StyledProps>`
  margin-left: 8px;
  color: ${({ disabled }) => (disabled ? "#bfbfbf" : "black")};
  font-size: 14px;
`;
