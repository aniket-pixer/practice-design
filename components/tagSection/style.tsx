import styled from "styled-components";

const TagWrapper = styled.span<{
  color?: string;
  size: string;
  clickable: boolean;
}>`
  display: inline-flex;
  align-items: center;
  padding: ${({ size }) =>
    size === "small" ? "2px 8px" : size === "large" ? "6px 12px" : "4px 10px"};
  font-size: ${({ size }) =>
    size === "small" ? "12px" : size === "large" ? "16px" : "14px"};
  border-radius: 12px;
  background-color: ${({ color }) => color || "#f0f0f0"};
  color: ${({ color }) => (color ? "#fff" : "#000")};
  border: ${({ color }) => (color ? "none" : "1px solid #d9d9d9")};
  transition: all 0.3s;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};

  &:hover {
    opacity: ${({ clickable }) => (clickable ? "0.85" : "1")};
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  font-size: 16px;
`;

const CloseIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  width: 16px;
  height: 16px;
  font-size: 12px;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: #ff4d4f;
  }
`;

export { TagWrapper, CloseIcon, IconWrapper };
