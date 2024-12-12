import { Typography } from "@/styles/typography";
import styled from "styled-components";

const ModalOuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;

const OpenModalButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  background: pink;
  border: none;
`;

const AddTitle = styled.p`
  ${Typography.body_md_medium}
  margin-top: 5px;
`;

export { ModalOuterDiv, OpenModalButton, AddTitle };
