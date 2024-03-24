import { ModalBase } from "../ModalBase/ModalBase";
import * as SC from "./AdvertModal.styled";
import sprite from "../../assets/sprite.svg";
import { formatLocation } from "../../helpers/formatLocation";
import { useState } from "react";
import { getAllDetails } from "../../helpers/getAllDetails";
import { formatDetails } from "../../helpers/formatDetails";
import { createFeatureList } from "../../helpers/createFeatureList";
import { createFeatureIconList } from "../../helpers/createFeatureIconList";
import { BookForm } from "../BookForm/BookForm";

export const AdvertModal = ({ onClose, advert }) => {
  const {
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details,
    gallery,
    reviews,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = advert;

  const [isOpenFeatures, setIsOpenFeatures] = useState(true);
  const [isOpenReviews, setIsOpenReviews] = useState(false);

  const handleFeaturesClick = () => {
    setIsOpenReviews(false);
    setIsOpenFeatures(true);
  };

  const handleReviewsClick = () => {
    setIsOpenReviews(true);
    setIsOpenFeatures(false);
  };

  const allDetails = getAllDetails(details);
  const formattedDetails = formatDetails(allDetails);
  const featureList = createFeatureList(
    formattedDetails,
    adults,
    transmission,
    engine
  );
  const featureIconList = createFeatureIconList(allDetails);

  const formattedLocation = formatLocation(location);

  const vehicleDetails = [
    { form },
    { length },
    { width },
    { height },
    { tank },
    { consumption },
  ];
  const detailsList = [];
  vehicleDetails.forEach((detail) =>
    detailsList.push(...Object.entries(detail))
  );

  const createRateList = (rating) => {
    const reviewList = [];
    const rate = Math.round(rating);

    for (let i = 1; i <= 5; i++) {
      reviewList.push(
        <li key={i}>
          <SC.RateIcon data-is-actual={rate >= i}>
            <use href={sprite + "#icon-star"}></use>
          </SC.RateIcon>
        </li>
      );
    }

    return reviewList;
  };

  return (
    <ModalBase onClose={onClose}>
      <SC.Title>{name}</SC.Title>
      <SC.SecondaryInfo>
        <SC.Rating>
          <SC.StarIcon>
            <use href={sprite + "#icon-star"}></use>
          </SC.StarIcon>
          {rating} ({reviews.length} Reviews)
        </SC.Rating>
        <SC.Location>
          <SC.LocationIcon>
            <use href={sprite + "#icon-location"}></use>
          </SC.LocationIcon>
          {formattedLocation}
        </SC.Location>
      </SC.SecondaryInfo>
      <SC.Price>€{price.toFixed(2)}</SC.Price>

      <SC.GalleryList>
        {gallery.map((img) => (
          <li key={img}>
            <SC.Img src={img} alt={name} />
          </li>
        ))}
      </SC.GalleryList>
      <SC.Description>{description}</SC.Description>
      <SC.SectionsTitleWrapper>
        <SC.SectionTitle
          onClick={handleFeaturesClick}
          data-is-active={isOpenFeatures}
        >
          Features
        </SC.SectionTitle>
        <SC.SectionTitle
          onClick={handleReviewsClick}
          data-is-active={isOpenReviews}
        >
          Reviews
        </SC.SectionTitle>
      </SC.SectionsTitleWrapper>
      <SC.SectionsWrapper>
        {isOpenFeatures && (
          <SC.SectionWrapper>
            <SC.FeatureList>
              {featureList.map((feature, index) => (
                <SC.FeatureItem key={feature}>
                  <SC.FeatureIcon>
                    <use
                      href={sprite + `#icon-${featureIconList[index]}`}
                    ></use>
                  </SC.FeatureIcon>
                  {feature}
                </SC.FeatureItem>
              ))}
            </SC.FeatureList>
            <SC.DetailsTitle>Vehicle details</SC.DetailsTitle>
            <SC.DetailsList>
              {detailsList.map((detail) => (
                <SC.DetailItem key={detail[0]}>
                  <SC.DetailTitle>{detail[0]}</SC.DetailTitle>
                  <SC.DetailValue>{detail[1]}</SC.DetailValue>
                </SC.DetailItem>
              ))}
            </SC.DetailsList>
          </SC.SectionWrapper>
        )}
        {isOpenReviews && (
          <SC.SectionWrapper>
            <SC.ReviewList>
              {reviews.map((review, index) => (
                <SC.ReviewItem key={index}>
                  <SC.ReviewerInfo>
                    <SC.ReviewerAvatar>
                      {review.reviewer_name[0]}
                    </SC.ReviewerAvatar>
                    <SC.ReviewerNameAndRating>
                      <SC.ReviewerName>{review.reviewer_name}</SC.ReviewerName>
                      <SC.ReviewerRating>
                        {createRateList(review.reviewer_rating)}
                      </SC.ReviewerRating>
                    </SC.ReviewerNameAndRating>
                  </SC.ReviewerInfo>
                  <SC.ReviewComment> {review.comment}</SC.ReviewComment>
                </SC.ReviewItem>
              ))}
            </SC.ReviewList>
          </SC.SectionWrapper>
        )}
        <SC.BookFormWrapper>
          <BookForm />
        </SC.BookFormWrapper>
      </SC.SectionsWrapper>
    </ModalBase>
  );
};
