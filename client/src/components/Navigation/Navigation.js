import React from "react";
import {
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  MainContainer,
  StyledLink,
} from "./NavigationStyledComponents";
import { Logo } from "../generic/Logo";

export const Navigation = () => {
  return (
    <StyledNav>
      <MainContainer>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <StyledNavItem>
          <StyledNavLink as={StyledLink} to="/timesheets">
            All Timesheets
          </StyledNavLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledNavLink as={StyledLink} to="/timesheets/create">
            Create Timesheet
          </StyledNavLink>
        </StyledNavItem>
      </MainContainer>

      <MainContainer>
        <StyledNavItem>
          <StyledNavLink as={StyledLink} to="/login">
            Login
          </StyledNavLink>
        </StyledNavItem>

        <StyledNavItem>
          <StyledNavLink as={StyledLink} to="/register">
            Register
          </StyledNavLink>
        </StyledNavItem>

        <StyledNavItem>
          <StyledNavLink as={StyledLink} to="/logout">
            Log out
          </StyledNavLink>
        </StyledNavItem>
      </MainContainer>
    </StyledNav>
  );
};
