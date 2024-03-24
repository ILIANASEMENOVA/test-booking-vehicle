import {
  Hero,
  HeroContainer,
  HeroTitle,
  PageTitle,
  StyledLink,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <Hero>
      <PageTitle>Welcome to our campervan agency</PageTitle>
      <HeroContainer />
      <HeroTitle>
        We provide a wide selection of campervan for rent. Find the perfect car
        for your travel.
      </HeroTitle>
      <StyledLink to="/catalog">Let's go</StyledLink>
    </Hero>
  );
};

export default HomePage;
