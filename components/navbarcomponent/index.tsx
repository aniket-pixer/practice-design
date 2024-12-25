import React from "react";
import Link from "next/link";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  NavRightSection,
} from "./style";

const NavBarComponent: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>
        <Link href="/">MyLogo</Link>
      </Logo>
      <NavLinks>
        <NavLink>
          <Link href="/customdropdownpage">Counter</Link>
        </NavLink>
        <NavLink>
          <Link href="/gridpage">GridPage</Link>
        </NavLink>
        <NavLink>
          <Link href="/modal">Modal</Link>
        </NavLink>
        <NavLink>
          <Link href="/animation">Animation</Link>
        </NavLink>
        <NavLink>
          <Link href="/faq">FAQ</Link>
        </NavLink>
      </NavLinks>
      <NavRightSection>
        <button>Login</button>
      </NavRightSection>
    </NavbarContainer>
  );
};

export default NavBarComponent;
