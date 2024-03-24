import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
`;

export const Img = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const PrimaryInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
`;

export const PriceAndHeartBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
`;

export const HeartBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 0px;
  background: transparent;
  border: 0px;
`;

export const HeartIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${(p) => (p["data-is-favorite"] ? "#e44848" : "#101828")};
  fill: ${(p) => (p["data-is-favorite"] ? "#e44848" : "none")};
`;

export const SecondaryInfo = styled.div`
  display: flex;
  gap: 16px;
`;

export const Rating = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #101828;
`;

export const StarIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #ffc531;
  fill: #ffc531;
`;

export const Location = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #101828;
`;

export const LocationIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #101828;
  fill: transparent;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
`;

export const FeatureList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  text-transform: capitalize;
  color: #101828;
  background: #f2f4f7;
  mix-blend-mode: multiply;
`;

export const FeatureIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: #101828;
  fill: transparent;
`;

export const ShowMoreBtn = styled.button`
  padding: 16px 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;
  background-color: #e44848;
  border-radius: 200px;
  border: 0px;
  transition: 250ms background-color linear;

  &:hover {
    background-color: #d84343;
  }
`;
