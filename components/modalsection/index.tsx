import React from "react";
import {
  CloseButton,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from "./style";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalSection: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay onClick={onClose} />
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </>
  );
};

export default ModalSection;
