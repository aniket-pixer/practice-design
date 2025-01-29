import styled, { css } from "styled-components";
type MessageType = "success" | "error" | "info" | "warning";

const MessageContainer = styled.div<{ type: MessageType }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  max-width: 300px;
  background-color: white;
  border-left: 4px solid;

  ${(props) =>
    props.type === "success" &&
    css`
      border-color: #52c41a;
      color: #52c41a;
    `}

  ${(props) =>
    props.type === "error" &&
    css`
      border-color: #ff4d4f;
      color: #ff4d4f;
    `}

  ${(props) =>
    props.type === "info" &&
    css`
      border-color: #1890ff;
      color: #1890ff;
    `}

  ${(props) =>
    props.type === "warning" &&
    css`
      border-color: #faad14;
      color: #faad14;
    `}
`;

const CloseButton = styled.span`
  margin-left: auto;
  cursor: pointer;
  font-size: 16px;
`;

export { MessageContainer, CloseButton };
