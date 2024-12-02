import styled from "styled-components";

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "themeMode", // Prevent themeMode from being passed to the DOM
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

export const Button = styled.button`
  padding: 8px 16px;
  cursor: pointer;
`;

export const LoginContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
