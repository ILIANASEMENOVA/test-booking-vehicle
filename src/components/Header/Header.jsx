import { NavItem, NavList, StyledHeader, StyledLink } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <NavList>
          <NavItem>
            <StyledLink to="/">Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/catalog">Catalog</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/favorites"> Favorites</StyledLink>
          </NavItem>
        </NavList>
      </nav>
    </StyledHeader>
  );
};
