import React, { useState, useRef, useEffect } from "react";
import {
  Wrapper,
  Input,
  Prefix,
  Suffix,
  ClearButton,
  Dropdown,
  DropdownItem,
  Button,
  InputWrapper,
} from "./style";

interface CustomInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: "small" | "middle" | "large";
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  button?: React.ReactNode;
  allowClear?: boolean;
  dropdownOptions?: string[]; // Dropdown options
  onOptionSelect?: (option: string) => void; // Callback when an option is selected
  style?: React.CSSProperties;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  defaultValue,
  onChange,
  placeholder,
  size = "middle",
  disabled = false,
  prefix,
  suffix,
  button,
  allowClear = false,
  dropdownOptions = [],
  onOptionSelect,
  style,
}) => {
  const [inputValue, setInputValue] = useState(defaultValue || "");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange?.(e);

      // Show dropdown if options exist
      if (dropdownOptions.length > 0) {
        setDropdownVisible(newValue !== "");
      }
    }
  };

  const handleClear = () => {
    if (!disabled) {
      setInputValue("");
      onChange?.({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
      setDropdownVisible(false);
    }
  };

  const handleOptionClick = (option: string) => {
    if (!disabled) {
      setInputValue(option);
      setDropdownVisible(false);
      onOptionSelect?.(option);
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <InputWrapper style={{ position: "relative", ...style }} ref={dropdownRef}>
      <Wrapper size={size}>
        {prefix && <Prefix>{prefix}</Prefix>}
        <Input
          type="text"
          value={value !== undefined ? value : inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        {allowClear && inputValue && !disabled && (
          <ClearButton onClick={handleClear}>✖</ClearButton>
        )}
        {suffix && <Suffix>{suffix}</Suffix>}
        {isDropdownVisible && dropdownOptions.length > 0 && (
          <Dropdown>
            {dropdownOptions
              .filter((option) =>
                option.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((option, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </DropdownItem>
              ))}
          </Dropdown>
        )}
      </Wrapper>
      {button && (
        <Button
          onFocus={() => dropdownOptions.length > 0 && setDropdownVisible(true)}
        >
          {button}
        </Button>
      )}
    </InputWrapper>
  );
};

export default CustomInput;
