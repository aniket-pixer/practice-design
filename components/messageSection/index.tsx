import React, { useEffect, useState } from "react";
import { CloseButton, MessageContainer } from "./style";

type MessageType = "success" | "error" | "info" | "warning";

interface MessageProps {
  type: MessageType;
  content: string;
  duration?: number; // in seconds
  onClose?: () => void;
}

const MessageSection: React.FC<MessageProps> = ({
  type,
  content,
  duration = 3,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration * 1000);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <MessageContainer type={type}>
      {content}
      <CloseButton onClick={onClose}>×</CloseButton>
    </MessageContainer>
  );
};

export default MessageSection;
