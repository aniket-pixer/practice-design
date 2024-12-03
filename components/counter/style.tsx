import styled from "styled-components";

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "themeMode",
})<{ themeMode: "light" | "dark" }>`
  background-color: ${({ themeMode }) =>
    themeMode === "light" ? "#fff" : "#333"};
  color: ${({ themeMode }) => (themeMode === "light" ? "#000" : "#fff")};
  padding: 20px;
  text-align: center;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export { Container, Button, LoginContainer, Input, LoginForm };
