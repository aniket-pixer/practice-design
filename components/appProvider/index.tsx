"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import NavBarComponent from "../navbarcomponent";

// Define ONBOARDING_ROUTES as an empty array
const ONBOARDING_ROUTES: string[] = [];

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  let NavbarComponent = null;

  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  if (ONBOARDING_ROUTES.includes(pathname)) {
    NavbarComponent = null;
  } else {
    NavbarComponent = <NavBarComponent />;
  }

  if (typeof window !== "undefined")
    return (
      <>
        {NavbarComponent}
        {children}
      </>
    );

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {NavbarComponent}
      {children}
    </StyleSheetManager>
  );
}
