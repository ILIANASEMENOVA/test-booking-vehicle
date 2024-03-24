import styled from "styled-components";

export const Title = styled.h3`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
`;

export const SecondaryInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
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

export const Price = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
`;

export const Img = styled.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
`;

export const GalleryList = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Description = styled.p`
  margin-bottom: 44px;
  max-height: 120px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background: #d9d9d9;
  }
`;

export const SectionsTitleWrapper = styled.div`
  margin-bottom: 44px;
  display: flex;
  gap: 40px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
`;

export const SectionTitle = styled.p`
  padding-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
  cursor: pointer;
  border-bottom: ${(p) => (p["data-is-active"] ? "5px solid #e44848" : "none")};
`;

export const SectionsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const SectionWrapper = styled.div`
  flex: 1;
`;

export const FeatureList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
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

export const DetailsTitle = styled.p`
  padding-bottom: 24px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const DetailItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const DetailTitle = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  color: #101828;
  text-transform: capitalize;
`;

export const DetailValue = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  color: #101828;
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ReviewerAvatar = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background: #f2f4f7;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #e44848;
`;

export const ReviewerNameAndRating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ReviewerName = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33333;
  color: #101828;
`;

export const ReviewerRating = styled.ul`
  display: flex;
  gap: 4px;
`;

export const RateIcon = styled.svg`
  width: 16px;
  height: 16px;
  /* stroke: #ffc531;
  fill: #ffc531; */
  stroke: ${(p) => (p["data-is-actual"] ? "#ffc531" : "#f2f4f7")};
  fill: ${(p) => (p["data-is-actual"] ? "#ffc531" : "#f2f4f7")};
`;

export const ReviewComment = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
`;

export const BookFormWrapper = styled.div`
  flex: 1;
`;
