// src/components/Navbar/style.tsx
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  a {
    text-decoration: none;
    color: #333;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  a {
    text-decoration: none;
    color: #555;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #0070f3;
    }
  }
`;

const NavRightSection = styled.div`
  button {
    padding: 0.5rem 1rem;
    background-color: #0070f3;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
      background-color: #005bb5;
    }
  }
`;

export { NavbarContainer, Logo, NavLinks, NavLink, NavRightSection };
