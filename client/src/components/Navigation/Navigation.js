import React from "react";
import {
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  MainContainer,
  StyledLink,
} from "./NavigationStyledComponents";
import { Logo } from "../generic/Logo";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/user";

export const Navigation = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const userId = useSelector((state) => state.user.user?.id);

  return (
    <StyledNav>
      {userId ? (
        <MainContainer>
          <StyledLink to="/">
            <Logo />
          </StyledLink>
          <StyledNavItem>
            <StyledNavLink as={StyledLink} to="/">
              All Timesheets
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink as={StyledLink} to="/timesheets/create">
              Create Timesheet
            </StyledNavLink>
          </StyledNavItem>
        </MainContainer>
      ) : (
        <MainContainer />
      )}

      <MainContainer>
        {!userId && (
          <StyledNavItem>
            <StyledNavLink as={StyledLink} to="/login">
              Login
            </StyledNavLink>
          </StyledNavItem>
        )}

        {!userId && (
          <StyledNavItem>
            <StyledNavLink as={StyledLink} to="/register">
              Register
            </StyledNavLink>
          </StyledNavItem>
        )}

        {userId && (
          <StyledNavItem onClick={handleLogout}>
            <StyledNavLink>Log out</StyledNavLink>
          </StyledNavItem>
        )}
      </MainContainer>
    </StyledNav>
  );
};
