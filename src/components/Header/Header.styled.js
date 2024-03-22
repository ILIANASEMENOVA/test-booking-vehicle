import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const NavItem = styled.li`
  width: 120px;
  height: 40px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  font-weight: 600;
  text-align: center;
  color: #101828;
  text-decoration: none;
  border-radius: 12px;

  &.active {
    color: #f7f7f7;
    background-color: #e44848;
  }
`;
