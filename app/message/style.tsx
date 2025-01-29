import styled from "styled-components";

const GlobalStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }
`;

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const ButtonError = styled.div`
  background: red;
  color: white;
  padding: 10px 10px;
  border-radius: 10px;
`;

const ButtonInfo = styled.div`
  background: #1890ff;
  color: white;
  padding: 10px 10px;
  border-radius: 10px;
`;

const ButtonSuccess = styled.div`
  background: #52c41a;
  color: white;
  padding: 10px 10px;
  border-radius: 10px;
`;

const ButtonWarning = styled.div`
  background: #faad14;
  color: white;
  padding: 10px 10px;
  border-radius: 10px;
`;

export {
  GlobalStyles,
  CenteredWrapper,
  ButtonError,
  ButtonInfo,
  ButtonSuccess,
  ButtonWarning,
};
