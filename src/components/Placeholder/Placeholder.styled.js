import styled from "styled-components";
import PlaceholderImg from "../../assets/empty-placeholder.jpg";

export const PlaceholderText = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #101828;
`;

export const PlaceholderImgWrapper = styled.div`
  margin: 0 auto;
  height: 480px;
  width: 480px;
  background-image: url(${PlaceholderImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
