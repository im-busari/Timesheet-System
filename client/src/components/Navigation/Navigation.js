import React from "react";
import {
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  MainContainer,
  SubContainer,
  Username,
} from "./NavigationStyledComponents";
import { Logo } from "../generic/Logo";

export const Navigation = () => {
  const mockUser = {
    username: "mockUsername",
  };

  if (mockUser) {
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

        <SubContainer>
          <StyledNavItem>
            <StyledNavLink href="#">Logout</StyledNavLink>
          </StyledNavItem>
          <Username>{`User: ${mockUser.username}`}</Username>
        </SubContainer>
      </StyledNav>
    );
  } else {
    return (
      <StyledNav>
        <MainContainer>
          <Logo />
          <StyledNavItem>
            <StyledNavLink href="#">Login</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="#">Register</StyledNavLink>
          </StyledNavItem>
        </MainContainer>
      </StyledNav>
    );
  }
};
