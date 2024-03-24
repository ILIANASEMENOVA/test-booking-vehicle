import styled from "styled-components";
import { Link } from "react-router-dom";

import HeroImg from "../../assets/hero.jpg";

export const Hero = styled.section`
  margin-bottom: 40px;
`;

export const PageTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  font-size: 2em;
`;

export const HeroContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
  padding-left: 40px;
  padding-right: 40px;

  background: url(${HeroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 14px;
`;

export const HeroTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  padding: 10px;

  color: #808080;

  border-radius: 14px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(30px);
`;

export const StyledLink = styled(Link)`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;

  font-weight: 600;
  text-align: center;
  color: #fff;

  text-decoration: none;
  border-radius: 14px;
  background-color: #e44848;

  transition: 250ms background-color linear;

  &:hover {
    background-color: #d84343;
  }
`;
