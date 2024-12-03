"use client";
import React, { useState } from "react";
import { Container, Button, LoginContainer, Input, LoginForm } from "./style";

interface CounterProps {
  initialCount?: number;
  initialTheme?: "light" | "dark";
  onLogin?: (username: string, password: string) => void;
}

const Counter: React.FC<CounterProps> = ({
  initialCount = 0,
  initialTheme = "light",
  onLogin,
}) => {
  // This state using for theme color change
  const [theme, setTheme] = useState(initialTheme);

  // This state using for counter
  const [count, setCount] = useState(initialCount);
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState<boolean | null>(null);

  // This state using for login form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // This function is using for the change the theme color
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  // This function is using for the increasing or decreasing counter number
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount);
  }

  // This function is using for the submitting Login form
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
      {/* HTML code for the theme change */}
      <div>
        <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
        <Button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </Button>
      </div>

      {/* HTML code for the counter increasing and decreasing */}
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

      {/* HTML code for the login form  */}
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

export default Counter;
