"use client";
import React, { useState } from "react";
import { Container, Button, LoginContainer, Input, LoginForm } from "./style";

interface ExampleTaskProps {
  initialCount?: number;
  initialTheme?: "light" | "dark";
  onLogin?: (username: string, password: string) => void;
}

const ExampleTask: React.FC<ExampleTaskProps> = ({
  initialCount = 0,
  initialTheme = "light",
  onLogin,
}) => {
  const [count, setCount] = useState(initialCount);
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState<boolean | null>(null);
  const [theme, setTheme] = useState(initialTheme);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount);
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(username, password);
    } else {
      alert(`Logged in as: ${username}`);
    }
  };

  return (
    <Container themeMode={theme}>
      <div>
        <div>
          <h1>{count}</h1>
          {trend !== null && (
            <p>The count is {trend ? "increasing" : "decreasing"}</p>
          )}
        </div>
        <div>
          <Button onClick={() => setCount(count + 1)}>Increment</Button>
          <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        </div>
      </div>
      <div>
        <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
        <Button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </Button>
      </div>
      <LoginContainer>
        <h1>Login</h1>
        <LoginForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </LoginForm>
      </LoginContainer>
    </Container>
  );
};

export default ExampleTask;
