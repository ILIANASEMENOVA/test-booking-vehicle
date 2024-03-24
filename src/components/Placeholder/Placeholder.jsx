import { PlaceholderText, PlaceholderImgWrapper } from "./Placeholder.styled";

export const Placeholder = ({ children }) => {
  return (
    <>
      <PlaceholderText>{children}</PlaceholderText>
      <PlaceholderImgWrapper />
    </>
  );
};
