import React from "react";
import {
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  MainContainer,
} from "./NavigationStyledComponents";
import { Logo } from "../generic/Logo";

export const Navigation = () => {
  return (
    <StyledNav>
      <MainContainer>
        <Logo />
        <StyledNavItem>
          <StyledNavLink href="#">All Timesheets</StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink href="#">Create Timesheet</StyledNavLink>
        </StyledNavItem>
      </MainContainer>

      <StyledNavItem>
        <StyledNavLink href="#">Logout</StyledNavLink>
      </StyledNavItem>
    </StyledNav>
  );
};
