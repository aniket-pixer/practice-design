// style.tsx
import styled, { css } from "styled-components";

const Wrapper = styled.div<{ size: "small" | "middle" | "large" }>`
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px 0 0 4px;
  padding: 6px 8px;
  transition: border-color 0.3s;
  width: 100%;

  &:focus-within {
    /* border-color: #1890ff; */
    /* box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2); */
  }

  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 12px;
      padding: 2px 6px;
    `}

  ${(props) =>
    props.size === "middle" &&
    css`
      font-size: 14px;
      padding: 6px 8px;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      font-size: 16px;
      padding: 6px 10px;
    `}
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: inherit;
  background: transparent;

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const Prefix = styled.span`
  margin: 0 4px;
  color: #a6a6a6;
`;

const Suffix = styled.span`
  margin: 0 4px;
  color: #a6a6a6;
`;

const Button = styled.button`
  background-color: #1890ff;
  border: none;
  border-radius: 0 8px 8px 0;
  padding: 0 10px;
  color: white;
`;

const ClearButton = styled.span`
  cursor: pointer;
  color: #a6a6a6;
  margin-left: 4px;

  &:hover {
    color: #1890ff;
  }
`;

const InputWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  border-radius: 8px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  width: auto;
  right: 0;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  /* max-height: 200px; */
  overflow-y: auto;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    background-color: #e6f7ff;
  }
`;

export {
  Wrapper,
  Input,
  Prefix,
  Suffix,
  ClearButton,
  DropdownItem,
  Dropdown,
  Button,
  InputWrapper,
};
