import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

export const StyledButton = styled.button`
  background: #1890ff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0077e6;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
