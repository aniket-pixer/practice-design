import styled, { css } from "styled-components";

interface Props {
  isVisible: boolean;
}

const ModalOverlay = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
    `};
  visibility: hidden;
  ${(props) =>
    props.isVisible &&
    css`
      visibility: visible;
    `};

  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;
`;

const ModalContainer = styled.div<Props>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  ${(props) =>
    props.isVisible &&
    css`
      transform: translate(-50%, -50%) scale(1);
    `};
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  z-index: 1001;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  opacity: 0;
  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
    `};
  transition: transform 0.3s ease, opacity 0.3s ease;
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
