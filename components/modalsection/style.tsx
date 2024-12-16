import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  z-index: 1001;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: opacity 0.3s ease; /* Smooth fade-in/out */
  :active {
    opacity: 1;
    pointer-events: all; /* Enable interaction */
  }
`;

const ModalContent = styled.div`
  padding: 20px;
  height: 500px;
  overflow-y: scroll;
  scrollbar-width: none;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #ff0000;
  }
`;

export { ModalOverlay, ModalContainer, ModalContent, CloseButton };
